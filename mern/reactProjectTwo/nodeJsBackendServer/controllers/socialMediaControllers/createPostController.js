const express = require('express');
const SocialMediaPost = require('../../models/socialMedia/SocialMediaPost');
const createPostController = async (req, res) => {
    const { description } = req.body

    // db ki ser kr k aye
    const newDescription = new SocialMediaPost({
        description: description
    })

    await newDescription.save();
    console.log(newDescription)

    res.json({
        success: true,
        description: description
    })
}
module.exports = createPostController