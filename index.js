
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//here is the MongoDB connection
const config = require('./dbConfig.json');
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);


app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());


const apiRouter = express.Router();
app.use('/api', apiRouter);

let authdict = { John: { password: "password" } };
app.post("/login", (req, res) => {
    console.log("Received login request", req.body);
    
    const data = req.body;
    if (!data.username || !data.password) {
        res.status(400).json({ error: "Missing username or password" });
        console.log("Missing username or password");
        return;
    }
    const user = authdict[data.username];
    if (user && user.password === data.password) {
        console.log(`User '${data.username}' successfully logged in`);
        res.status(200).json({ username: data.username });
    } else {
        console.log(`User '${data.username}' not found or incorrect password`);
        res.status(400).json({ error: "Invalid credentials" });
    }
});


const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.post("/signup", jsonParser, (req, res) => {
    try {
        let data = req.body;
        if (data.username === undefined || data.password === undefined) {
            res.status(400).end();
        } else {
            if (data.username in authdict) {
                console.log("This username is already being used");
                res.status(409).json({ error: "Username already in use." });
            } else {
                authdict[data.username] = data.password;
                res.status(201).json({ message: "User registered successfully." });
            }
        }
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: "An error occurred during registration." });
    }
});

const apiKey = process.env.OPENAI_API_KEY;
app.post('/send-message', async (req, res) => {
    const userMessage = req.body.message;

    // Perform OpenAI API request using apiKey
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
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  

app.listen(4000, () => {
    console.log("port connected");
})

