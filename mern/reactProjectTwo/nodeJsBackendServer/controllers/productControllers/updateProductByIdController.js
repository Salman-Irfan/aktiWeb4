const Product = require("../../models/productModel/productModel");
const { findByIdAndUpdate } = require("../../models/socialMedia/SocialMediaPost");

const updateProductByIdController = async(req, res) => {
    try {
        const id = req.params.id
        // first check either products exists or not
        const existingProduct = await Product.findById(id);
        // if product not found
        if (!existingProduct) {
            return res.json({
                success: false,
                message: 'Product not found'
            })
        }
        // if product found, update this product
        const { productTitle, productDescription, productPrice } = req.body
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            {
                productTitle, productDescription, productPrice
            },
            {
                new: true
            }
        )
        return res.json({
            success: true,
            message: 'product updated successfully',
            updatedProduct: updatedProduct
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}
module.exports = updateProductByIdController