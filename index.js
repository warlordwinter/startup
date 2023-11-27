const express = require('express')
const cookieParser = require('cookie-parser')
const fs = require('fs')
const path = require('path')
// const bodyParser = require('body-parser');
const app = express()
const {
  client,
  addPDF,
  validateLogin,
  getUser,
  addUser,
  getPDF,
} = require('./mongo')

const multer = require('multer')
const upload = multer()

app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))

app.post('/login', (req, res) => {
  if (req.body.username === undefined || req.body.password === undefined) {
    res.status(400).end()
  } else {
    if (validateLogin(req.body.username, req.body.password)) {
      res.status(200).json({ username: req.body.username })
      // console.log(`User '${req.body.username}' successfully logged in`);
    } else {
      console.log(`User '${req.body.username}' not found or incorrect password`)
      res.status(400).json({ error: 'Invalid credentials' })
    }
  }
})

app.post('/signup', (req, res) => {
  if (req.body.username === undefined || req.body.password === undefined) {
    res.status(400).end()
  } else {
    if (getUser(req.body.username)) {
      console.log('This username is already being used')
      res.status(409).json({ error: 'Username already in use.' })
    } else {
      addUser(req.body.username, req.body.password)
      res.status(201).json({ message: 'User registered successfully.' })
    }
  }
})

const apiKey = process.env.OPENAI_API_KEY
app.post('/send-message', async (req, res) => {
  const userMessage = req.body.message

  // Perform OpenAI API request using apiKey
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: 'You are a chatbot' },
          { role: 'user', content: userMessage },
        ],
      }),
    })

    if (response.ok) {
      const data = await response.json()
      res.json({ botResponse: data.choices[0].message.content })
    } else {
      res
        .status(response.status)
        .json({ error: 'Error sending message to the API' })
    }
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.post('/upload-pdf', upload.single('pdf'), async (req, res) => {
  try {
    console.log('uploading pdf:', req.file)
    const fileData = req.file.buffer
    const filename = req.body.filename // Get the filename from the request body
    const result = await addPDF('newuser', fileData, filename) // :)

    if (result.insertedId) {
      console.log(`PDF stored in MongoDB with _id: ${result.insertedId}`)
      res.json({ success: true })
    } else {
      console.error('Failed to insert PDF into MongoDB:', result)
      res.status(500).json({ success: false, error: 'Internal server error' })
    }
  } catch (ex) {
    console.error('Error storing PDF in MongoDB:', ex)
    res.status(500).json({ success: false, error: 'Internal server error' })
  }
})

//Notes from Gabe
//Make sure to get the filename requested from the get request!!!
app.get('/get-pdf/:fileName', async (req, res) => {
  try {
    if (!req.params.fileName) {
      res.status(400).end();
    } else {
      const result = await getPDF(req.params.fileName);

      if (result) {
        // Set the appropriate Content-Type for a PDF
        res.setHeader('Content-Type', 'application/pdf');
        // Send the binary data directly
        console.log('result of the PDF', result)
        console.log(result)
        console.log(result.data.buffer)
        res.status(200).send(result.data.buffer);
      } else {
        res.status(404).json({ error: 'PDF not found' });
      }
    }
  } catch (ex) {
    console.log(`Error retrieving PDF from MongoDB: ${ex.message}`);
    res.status(500).json({ success: false, error: ex.message });
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

//Cookies Section

const port = 4000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
