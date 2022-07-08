const express = require('express');
const routers = express.Router();

const {
    getAllData, getAllEmail
} = require('../controller/EmailController')

const {  authenticateUser , authorizePermissions } = require('../userConnected/log_admin_features')

routers.route('/data').get(authenticateUser,authorizePermissions('admin'),getAllData)
routers.route('/email').get(authenticateUser,authorizePermissions('admin'),getAllEmail)


module.exports = routers