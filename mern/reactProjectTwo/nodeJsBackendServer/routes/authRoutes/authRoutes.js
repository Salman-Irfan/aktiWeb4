const express = require('express');
const userRegisterController = require('../../controllers/authControllers/userRegisterController');
const multipartyMiddleware = require('../../middlewares/fileUploadMiddleware');
const userLoginController = require('../../controllers/authControllers/userLoginController');

const authRouter = express.Router();

authRouter.post('/auth/register', multipartyMiddleware, userRegisterController)
authRouter.post('/auth/login', userLoginController)

module.exports = authRouter