const express = require('express');
const app = express();
const multiparty = require('connect-multiparty');
const path = require('path');
const fs = require('fs');

const cors = require('cors');
const port = 3000;

// Use connect-multiparty middleware
const multipartyMiddleware = multiparty({
    uploadDir: './public',
});

app.use(express.json());
// add middleware to parse form data instead of JSON
app.use(express.urlencoded({ extended: true }));
// use a static folder
app.use(express.static('public'));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// Example route handling file uploads
app.post('/upload', multipartyMiddleware, (req, res) => {
    // Access files using req.files
    const files = req.files.upload;
    
    // Handle uploaded files as needed

    // Create a dynamic URL based on server's protocol, host, and port
    const baseUrl = `${req.protocol}://${req.get('host')}`;

    // Create a unique filename based on original filename, current date, and field name
    const currentDate = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
    const uniqueFileName = `${files.fieldName}_${currentDate}_${files.originalFilename}`;

    // Save the file with the unique filename
    const savedFilePath = path.join('./public', uniqueFileName);
    fs.renameSync(files.path, savedFilePath);

    const dynamicUrl = `${baseUrl}/${uniqueFileName}`;

    res.json({
        uploaded: 1,
        fileName: uniqueFileName,
        url: dynamicUrl,
    });
});

// postman
app.post('/upload-postman', multipartyMiddleware, (req, res) => {
    // Access files using req.files
    console.log(req.body)
    const {name, email} = req.body
    const files = req.files;
    // console.log(files)
    const {cnics, profile} = files;
    let uploaded = 0
    // Handle uploaded files as needed
    // Create a dynamic URL based on server's protocol, host, and port
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    // Create a unique filename based on original filename, current date, and field name
    const currentDate = new Date().toISOString().replace(/[-:]/g, '').split('.')[0];
    // rename profile file
    const uniqueProfileFileName = `${profile.fieldName}_${currentDate}_${profile.originalFilename}`;
    // Save the file with the unique filename
    const savedProfileFilePath = path.join('./public', uniqueProfileFileName);
    fs.renameSync(profile.path, savedProfileFilePath);
    uploaded++
    const dynamicProfileUrl = `${baseUrl}/${uniqueProfileFileName}`;

    let dynamicCnicUrls = []
    for (const cnic of cnics){
        // rename cnics file
        const uniqueCnicFileName = `${cnic.fieldName}_${currentDate}_${cnic.originalFilename}`;
        // Save the file with the unique filename
        const savedCnicFilePath = path.join('./public', uniqueCnicFileName);
        fs.renameSync(cnic.path, savedCnicFilePath);
        const dynamicCnicUrl = `${baseUrl}/${uniqueCnicFileName}`;
        dynamicCnicUrls.push(dynamicCnicUrl);
        uploaded++;
    }
    res.json({
        uploaded,
        dynamicProfileUrl,
        dynamicCnicUrls,
        name,
        email
    });
});

const LOCAL_IP = '192.168.100.9'
const PUBLIC_IP = '175.107.237.228'
const LOCAL_HOST = 'localhost'
app.listen(port, 
    // LOCAL_IP, 
    () => {
        console.log(`Example app listening on port http://${LOCAL_HOST}:${port}`);
});
