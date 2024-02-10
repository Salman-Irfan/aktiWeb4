const path = require ('path')
const fs = require ('fs')
const User = require('../../models/userModel/userModel')

const userRegisterController = async (req, res) => {
    try {
        const {name, email, password} = req.body

        const existingUser = await User.findOne({email: email})

        if(existingUser){
            return res.json({
                success: false,
                message: 'User already exists'
            })
        }

        // saving file 
        const files= await req.files
        
        const { profileImage } = files
        // Create a dynamic URL based on server's protocol, host, and port
        const baseUrl = `${req.protocol}://${req.get('host')}`;

        // Create a unique filename based on original filename, current date, and field name
        const currentDate = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
        const uniqueFileName = `${profileImage.fieldName}_${currentDate}_${profileImage.originalFilename}`;

        // Save the file with the unique filename
        const savedFilePath = path.join(__dirname, '../../public', uniqueFileName);

        // Rename the file to the unique filename
        fs.renameSync(profileImage.path, savedFilePath);

        // product image file link
        const profileImageLink = `${baseUrl}/${uniqueFileName}`;

        // towards db save
        const newUser = new User({
            name, 
            email,
            password,
            profileImageLink
        })
        await newUser.save()

        return res.json({
            success: true,
            user: newUser
        })
        
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }

}

module.exports = userRegisterController