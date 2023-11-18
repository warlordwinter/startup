// mongotest.js
module.exports = {
    addUser: addUser,
    getUser: getUser,
    validateLogin: validateLogin,
    getPDFs: getPDFs,
    addPDF: addPDF,

}

const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

// const encodedPassword = encodeURIComponent(config.password);
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);


const db = client.db('startup');
const userCollection = db.collection('users');
const pdfCollection = db.collection('pdfs');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
    console.log("Connected successfully to server");
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

async function addPDF(username,data) {
    const result = await pdfCollection.insertOne({ username: username, data: data });
    console.log(`PDF added in MongoDB with username: ${result.username}`);
    if (result) {
        console.log("PDF added to MongoDB");
        return true;
    } else {
        console.log("failed to add PDF to MongoDB");
        return false;
    }
}



async function addUser(username) {
    try {
        const result = await userCollection.insertOne({ username: username, password: password });
        console.log(`User added in MongoDB with _id: ${result.insertedId}`);
    } catch (ex) {
        console.log(`Error storing user in MongoDB: ${ex.message}`);
    } finally {
        await client.close();
    }
}

async function getUser(username) {
    const result = await userCollection.findOne({ username: username });
    if (result) {
        console.log("User found");
        return true;
    } else {
        console.log("User not found");
        return false;
    }
}

async function validateLogin(username,password){
    const result = await userCollection.findOne({ 'username': username, 'password' : password});
    if (result) {
        console.log("User found");
        return true;
    } else {
        console.log("User not found");
        return false;
    }
}

async function getPDFs(username) {
    const result = await pdfCollection.findOne({ username: username });
    if (result) {
        console.log("We found the PDFs")
        return result['pdf'];
    } else {
        console.log("user not found (getPDFs)");
        return null;
    }
}