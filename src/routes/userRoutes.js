const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.route('/register').post(userController.postUserRegister);
router.route('/login').post(userController.postLogin);

module.exports = router