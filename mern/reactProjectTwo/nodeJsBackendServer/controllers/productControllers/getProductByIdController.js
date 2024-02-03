const Product = require("../../models/productModel/productModel")

const getProductByIdController = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        return res.json({
            success: true,
            product: product
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}

module.exports = getProductByIdController