const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const encodedPassword = encodeURIComponent(config.password);
const url = `mongodb+srv://${config.userName}:${encodedPassword}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});