const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    profileImageLink: {
        type: String
    }
});


const User = mongoose.model('User', userSchema)

module.exports = User