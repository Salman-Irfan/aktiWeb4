const express = require('express')
const connectToMongoDb = require('./config/mongoDb')
const SocialMediaPost = require('./models/socialMedia/SocialMediaPost')
const createPostController = require('./controllers/socialMediaControllers/createPostController')
const addProductController = require('./controllers/productControllers/addProductController')
const cors = require('cors')

const app = express()
app.use(express.json()) //
app.use(cors())
const port = 3000

connectToMongoDb()

app.get('/', (req, res) => {
    // server takes request from client
    res.send(`
    <h1> this is heading one</h1>
    <h2> this is heading two</h2>
    
    `)
})


app.post('/about', (req, res) => {
    res.send('about page from node js')
})



// route to create sm post
app.post('/create-post', createPostController)


app.post('/add-product', addProductController)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})