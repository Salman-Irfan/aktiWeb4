const Product = require("../../models/product-model/product-model")

const deleteProductByIdController = async (req, res) => {
    try {
        const productId = req.params.id
        // Check if the note with the given ID exists
        const existingProduct = await Product.findById(productId);

        if (!existingProduct) {
            return res.json({ error: "Product not found" });
        }

        // Find the product by ID and remove it
        const deletedProduct = await Product.findByIdAndDelete(productId);

        

        return res.json({ 
            success: true,
            message: 'Product deleted successfully',
            deletedProduct: deletedProduct
        });
    } catch (error) {
        console.log(error)
    }
}
module.exports = deleteProductByIdController