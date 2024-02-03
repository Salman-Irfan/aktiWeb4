const Product = require("../../models/productModel/productModel")

const getAllProductsController = async(req, res) => {
    try {
        const allProducts = await Product.find()
        return res.json({
            success: true,
            products: allProducts
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}
module.exports = getAllProductsController