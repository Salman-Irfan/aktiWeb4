const Product = require("../../models/product-model/product-model")

const getProductByIdController = async (req, res) => {
    try {
        const productId = req.params.id
        // Check if the note with the given ID exists
        const existingProduct = await Product.findById(productId);

        if (!existingProduct) {
            return res.json({ error: "Product not found" });
        }
        res.json({
            success: true,
            product: existingProduct
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = getProductByIdController