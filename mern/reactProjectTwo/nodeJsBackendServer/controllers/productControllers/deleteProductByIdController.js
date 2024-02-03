const Product = require("../../models/productModel/productModel");

const deleteProductByIdController = async (req, res) => {
    try {
        const id = req.params.id;
        // first check either products exists or not
        const existingProduct = await Product.findById(id);
        // if product not found
        if (!existingProduct){
            return res.json({
                success: false,
                message: 'Product not found'
            })
        }
        // if product found, delete this product
        const deletedProduct = await Product.findByIdAndDelete(id)
        return res.json({
            success: true,
            message: 'product deleted successfully',
            deletedProduct: deletedProduct
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}
module.exports = deleteProductByIdController