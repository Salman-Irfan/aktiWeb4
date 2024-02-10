const express = require('express')
const productRouter = require('./productRoutes/productRoutes')
const authRouter = require('./authRoutes/authRoutes')

const router = express.Router()

// if we are working only backend, then it is a convention to write api
router.use('/api/v1', productRouter)
router.use('/api/v1', authRouter)


module.exports = router