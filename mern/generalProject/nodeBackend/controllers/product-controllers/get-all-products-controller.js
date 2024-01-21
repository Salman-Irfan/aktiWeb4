const Product = require("../../models/product-model/product-model")

const getAllProductsController = async (req, res) => {
    try {
        const allProducts = await Product.find()
        res.json({
            success: true,
            products: allProducts
        })
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = getAllProductsController