const Product = require("../../models/productModel/productModel")

const addProductController = async (req, res) => {
    try {
        // client browser, front end dev, thunder client
        // client hamesha req
        // server takes request from client
        // console.log(req.body)
        // destructuring the req.body
        const { productTitle, productDescription, productPrice } = req.body
        // console.log(productTitle, productDescription, productPrice)

        // to save in
        // 1st we'll see by which name our db model is export

        const newProduct = new Product({
            productTitle: productTitle,
            productDescription: productDescription,
            productPrice: productPrice
        })

        // console.log(newProduct)
        await newProduct.save()

        // express server / node server / backend dev => server
        // server haesah res send krta hai
        return res.json({
            success: true,
            message: "product saved in db"
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            message: error.message
        })
    }
    
}
module.exports = addProductController