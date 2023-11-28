// mongotest.js
module.exports = {
  addUser: addUser,
  getUser: getUser,
  validateLogin: validateLogin,
  getPDF: getPDF,
  addPDF: addPDF,
}

const { MongoClient } = require('mongodb')
const config = require('./dbConfig.json')

// const encodedPassword = encodeURIComponent(config.password);
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`
const client = new MongoClient(url)

  ; (async function testConnection() {
    await client.connect()
    await db.command({ ping: 1 })
    console.log('Connected successfully to server')
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`)
    process.exit(1)
  })

const db = client.db('startup')
const userCollection = db.collection('users')
const pdfCollection = db.collection('pdfs')

async function addPDF(username, data, fileName) {
  try {
    const result = await pdfCollection.insertOne({
      username: username,
      data: data,
      fileName: fileName,
    })
    console.log('result', result)
    return result
  } catch (error) {
    console.log('failed to add PDF to MongoDB', error)
    return false
  }
}

async function getPDF(fileName) {
  try {
    const result = await pdfCollection.findOne({
      // username: 'username',
      'fileName': fileName,
    })
    console.log('Result from MongoDB:', result)
    console.log(fileName)
    return result
  } catch (error) {
    console.error('error getting the PDF', error)
    return null
  }  // Add this line for debugging
}

async function addUser(username, password) {
  try {
    const result = await userCollection.insertOne({
      username: username,
      password: password,
    })
    console.log(`User added in MongoDB with _id: ${result.insertedId}`)
  } catch (ex) {
    console.log(`Error storing user in MongoDB: ${ex.message}`)
  } finally {
    await client.close()
  }
}

async function getUser(username) {
  const result = await userCollection.findOne({ username: username })
  if (result) {
    console.log('User is already stored in Database')
    return true
  } else {
    console.log('Username is Unique')
    return false
  }
}

async function validateLogin(username, password) {
  const result = await userCollection.findOne({
    username: username,
    password: password,
  })
  if (result) {
    console.log('User found')
    return true
  } else {
    // console.log('User not found')
    return false
  }
}
