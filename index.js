
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
let authdict = {username: "John", password: "mypassword"};


app.use(cookieParser());
app.use(express.json());
app.use(express.static('HTML_code'));
app.use(cookieParser());

const apiRouter = express.Router();
app.use('/api', apiRouter);

app.post("/login", (req, res) => {
    console.log("We received the Data for Login")
    let data = req.body;
    if (data.username === undefined || data.password === undefined) {
        res.status(400).send("Missing username or password");
    } else if (authdict.hasOwnProperty(data.username) && authdict[data.username] === data.password) {
        console.log(`Key '${data.username}' confirmed identity`);
        res.status(200).send(data.username);
    } else {
        res.status(400).send("User not found");
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

// function signUP() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
//     var fullName = document.getElementById("fullname").value;
//     log.console(username, password, fullName)

//     if (username && password) {
//         // Valid username and password, you can proceed
//         fetch('/signup', {
//             method: "POST",
//             body: JSON.stringify({
//                 username: username,
//                 password: password,
//                 fullName: fullName
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })        
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((jsonResponse) => {
//                 // Handle the jsonResponse based on your needs
//                 console.log(jsonResponse);

//                 // Assuming you have a success message in the response
//                 alert('User registered successfully.');
//                 // Update the user_name variable
//                 let user_name;
//                 user_name = username;
//                 // Redirect to another page
//                 window.location.href = 'upload_station.html';
//             })
//             .catch((error) => {
//                 // Handle errors, including the case when the username is already in use (status code 409)
//                 console.error('Error during registration:', error);

//                 // Check if the error is due to a conflict (username already in use)
//                 if (error.message.includes('Status: 409')) {
//                     alert('Username already in use. Please choose a different username.');
//                 } else {
//                     // Handle other errors as needed
//                     alert('An error occurred during registration.');
//                 }
//             });
//     } else {
//         // Handle the case where login information is incomplete or incorrect
//         alert('Please enter a valid username and password.');
//     }
// }
