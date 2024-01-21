const express = require('express');
const addProductController = require('../../controllers/product-controllers/add-product-controller');
const getAllProductsController = require('../../controllers/product-controllers/get-all-products-controller');
const deleteProductByIdController = require('../../controllers/product-controllers/delete-product-by-id-controller');
const getProductByIdController = require('../../controllers/product-controllers/getProductByIdController');
const updateProductByIdController = require('../../controllers/product-controllers/updateProductByIdController');
const multipartyMiddleware = require('../../middlewares/fileUploadMiddleware');
const productRouter = express.Router();


productRouter.post('/add-product', multipartyMiddleware ,addProductController)
productRouter.get('/all-products', getAllProductsController)
productRouter.get('/product/:id', getProductByIdController)
productRouter.put('/update-product/:id', updateProductByIdController)
productRouter.delete('/delete-product/:id', deleteProductByIdController)

module.exports = productRouter;