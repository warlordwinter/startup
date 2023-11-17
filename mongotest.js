// mongotest.js
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const encodedPassword = encodeURIComponent(config.password);
const url = `mongodb+srv://${config.userName}:${encodedPassword}@${config.hostname}`;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function storePDFInMongo(data) {
    try {
        await client.connect();
        const db = client.db('rental');
        const pdfCollection = db.collection('pdfs');

        const result = await pdfCollection.insertOne({ data });

        console.log(`PDF stored in MongoDB with _id: ${result.insertedId}`);
    } catch (ex) {
        console.log(`Error storing PDF in MongoDB: ${ex.message}`);
    } finally {
        await client.close();
    }
}

module.exports = storePDFInMongo;
