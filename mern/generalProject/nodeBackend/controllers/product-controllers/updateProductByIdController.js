const Product = require("../../models/product-model/product-model")

const updateProductByIdController = async (req, res) => {
    try {
        const productId = req.params.id
        // Check if the note with the given ID exists
        const existingProduct = await Product.findById(productId);

        if (!existingProduct) {
            return res.json({ error: "Product not found" });
        }

        // write logic to update the product
        // Assuming you have an object containing the updated fields in the request body
        const updatedProductData = req.body;

        // Update the existing product
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            updatedProductData,
            { new: true } // This option ensures that the updated product is returned
        );

        if (updatedProduct) {
            return res.json({ success: true, product: updatedProduct });
        } else {
            return res.json({ error: "Failed to update product" });
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = updateProductByIdController