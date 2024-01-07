const mongoose =  require ('mongoose');
const { Schema } = mongoose;

const socialMediaPostSchema = new Schema({
    description: String, // String is shorthand for {type: String}
},{
    timestamps: true, 
});

const SocialMediaPost = mongoose.model('posts', socialMediaPostSchema);

module.exports = SocialMediaPost