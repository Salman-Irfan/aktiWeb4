const express = require('express');
const addProductController = require('../../controllers/productControllers/addProductController');
const getAllProductsController = require('../../controllers/productControllers/getAllProductsController');
const getProductByIdController = require('../../controllers/productControllers/getProductByIdController');
const deleteProductByIdController = require('../../controllers/productControllers/deleteProductByIdController');
const updateProductByIdController = require('../../controllers/productControllers/updateProductByIdController');

const productRouter = express.Router()

// route to add product
productRouter.post('/add-product', addProductController)

// route to read all products
productRouter.get('/all-products', getAllProductsController)
productRouter.get('/product/:id', getProductByIdController)
// delet by id
productRouter.delete('/delete/:id', deleteProductByIdController)
// put request to update an existing product
productRouter.put('/update/:id', updateProductByIdController)



module.exports = productRouter