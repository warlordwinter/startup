const express = require('express');
const cookieParser = require('cookie-parser');
// const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
// const fetch = require('node-fetch'); // Add this line to import the fetch function
const app = express();
// const config = require('./dbConfig.json');
const mongo = require('./mongo');

// const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
// const client = new MongoClient(url, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

app.post("/login", (req, res) => {
    if (req.body.username === undefined || req.body.password === undefined) {
        res.status(400).end();
    } else {
        if (mongo.validateLogin(req.body.username, req.body.password)) {
            res.status(200).json({ username: req.body.username });
            // console.log(`User '${req.body.username}' successfully logged in`);
        } else {
            console.log(`User '${req.body.username}' not found or incorrect password`);
            res.status(400).json({ error: "Invalid credentials" });
        }
    }
});

    // console.log("Received login request", req.body);

    // const data = req.body;
    // if (!data.username || !data.password) {
    //     res.status(400).json({ error: "Missing username or password" });
    //     console.log("Missing username or password");
    //     return;
    // }
    // const user = authdict[data.username];
    // if (user && user.password === data.password) {
    //     console.log(`User '${data.username}' successfully logged in`);
    //     res.status(200).json({ username: data.username });
    // } else {
    //     console.log(`User '${data.username}' not found or incorrect password`);
    //     res.status(400).json({ error: "Invalid credentials" });
    // }

app.post("/signup", (req, res) => {
    if (req.body.username === undefined || req.body.password === undefined) {
        res.status(400).end();
    } else {
        if (mongo.getUser(req.body.username)) {
            console.log("This username is already being used");
            res.status(409).json({ error: "Username already in use." });
        } else {
            mongo.addUser(req.body);
            res.status(201).json({ message: "User registered successfully." });
        }
    }
    // try {
    //     let data = req.body;
    //     if (data.username === undefined || data.password === undefined) {
    //         res.status(400).end();
    //     } else {
    //         if (data.username in authdict) {
    //             console.log("This username is already being used");
    //             res.status(409).json({ error: "Username already in use." });
    //         } else {
    //             authdict[data.username] = data.password;
    //             res.status(201).json({ message: "User registered successfully." });
    //         }
    //     }
    // } catch (err) {
    //     console.error(err);
    //     res.status(400).json({ error: "An error occurred during registration." });
    // }
});

const apiKey = process.env.OPENAI_API_KEY;
app.post('/send-message', async (req, res) => {
    const userMessage = req.body.message;

    // Perform OpenAI API request using apiKey
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: 'You are a chatbot' },
                    { role: 'user', content: userMessage },
                ],
            }),
        });

        if (response.ok) {
            const data = await response.json();
            res.json({ botResponse: data.choices[0].message.content });
        } else {
            res.status(response.status).json({ error: 'Error sending message to the API' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/upload-pdf', bodyParser.json(), async (req, res) => {
    const data = req.body.data;

    try {
        await client.connect();
        const db = client.db('rental');
        const pdfCollection = db.collection('pdfs'); // this is the collection name

        const result = await pdfCollection.insertOne({ data });

        console.log(`PDF stored in MongoDB with _id: ${result.insertedId}`);
        res.json({ success: true });
    } catch (ex) {
        console.log(`Error storing PDF in MongoDB: ${ex.message}`);
        res.status(500).json({ success: false, error: ex.message });
    } finally {
        await client.close();
    }
});

app.get('/get-pdf', async (req, res) => {
    try {
        await client.connect();
        const db = client.db('startup');
        const pdfCollection = db.collection('pdfs');

        const result = await pdfCollection.find().toArray();

        console.log('Result from MongoDB:', result);  // Add this line for debugging

        if (result.length > 0) {
            const pdfData = result[0].data; // Assuming the data field contains the PDF content
            res.setHeader('Content-Type', 'application/pdf');
            res.send(pdfData);
        } else {
            console.log('No PDF found');
            res.status(404).json({ success: false, error: 'No PDF found' });
        }
    } catch (ex) {
        console.log(`Error retrieving PDF from MongoDB: ${ex.message}`);
        res.status(500).json({ success: false, error: ex.message });
    } finally {
        await client.close();
    }
});



app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
