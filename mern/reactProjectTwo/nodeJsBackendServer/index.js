const express = require('express')
const connectToMongoDb = require('./config/mongoDb')


const app = express()


const port = 3000

connectToMongoDb()

app.get('/', (req, res) => {
    // server takes request from client
    res.send('Hello World! from node js backend server')
})
app.post('/about', (req, res) => {
    res.send('about page from node js')
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})