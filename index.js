
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();



app.use(cookieParser());
app.use(express.json());
app.use(express.static('HTML_code'));
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


app.listen(4000, () => {
    console.log("port connected");
})

