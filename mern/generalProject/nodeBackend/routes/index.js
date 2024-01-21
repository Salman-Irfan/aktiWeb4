const express = require('express');
const productRouter = require('./products-routes/products-routes');
const router = express.Router();

router.use('/api/v1', productRouter)

module.exports = router