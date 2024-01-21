const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    productTitle: String, // String is shorthand for {type: String}
    productDescription: String,
    productPrice: Number,
    // productImage - todo
}, {
    timestamps: true
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;