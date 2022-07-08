const express = require('express');
const routers = express.Router();

const {
    register, logIn, logOut
} = require('../controller/userController')

routers.route('/register').post(register)
routers.route('/login').post(logIn)
routers.route('/logout').post(logOut)

module.exports = routers