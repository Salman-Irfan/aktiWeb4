const express = require('express')
const connectToMongoDb = require('./config/mongoDb')
const cors = require('cors')
const router = require('./routes')
const dotenv = require('dotenv')

const app = express()
app.use(express.json()) //

// add middleware to parse form data instead of JSON
app.use(express.urlencoded({ extended: true }));
// use a static folder
app.use(express.static('public'));

app.use(cors())
// using environment variables
const config = dotenv.config
config()

const PORT = process.env.PORT || 3000

connectToMongoDb()

app.get('/', (req, res) => {
    // server takes request from client
    res.send(`
    <h1> this is heading one</h1>
    <h2> this is heading two</h2>
    
    `)
})




// defined routes 
app.use( '/', router)

// route to create sm post
// app.post('/create-post', createPostController)



app.listen(PORT, () => {
    console.log(`Example app listening on PORT http://localhost:${PORT}`)
})