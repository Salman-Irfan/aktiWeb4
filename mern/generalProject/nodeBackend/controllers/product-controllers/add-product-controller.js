const Product = require("../../models/product-model/product-model")
const path = require('path')
const fs = require('fs')
const addProductController = async(req, res) => {
    try {
        const { title, description, price } = req.body
        // Access files using req.files
        const files = await req.files;
        const { productFile, videoFile } = files

        // Handle uploaded files as needed

        // Create a dynamic URL based on server's protocol, host, and port
        const baseUrl = `${req.protocol}://${req.get('host')}`;

        // Create a unique filename based on original filename, current date, and field name
        const currentDate = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
        const uniqueFileName = `${productFile.fieldName}_${currentDate}_${productFile.originalFilename}`;
        const uniqueVideoFileName = `${videoFile.fieldName}_${currentDate}_${videoFile.originalFilename}`;

        // Save the file with the unique filename
        const savedFilePath = path.join(__dirname, '../../public', uniqueFileName);
        const savedVideoFilePath = path.join(__dirname, '../../public', uniqueVideoFileName);
        // now rename the saved file with <uniqueFileName>
        // Rename the file to the unique filename
        fs.renameSync(productFile.path, savedFilePath);
        fs.renameSync(videoFile.path, savedVideoFilePath);

        // product image file link
        const productImageLink = `${baseUrl}/${uniqueFileName}`;
        const productVideoLink = `${baseUrl}/${uniqueVideoFileName}`;

        const newProduct = new Product({
            title: title,
            description: description,
            price: price,
            productImageLink: productImageLink,
            productVideoLink: productVideoLink
        })
        await newProduct.save()
        res.json({
            success: true,
            product: newProduct
        })
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = addProductController