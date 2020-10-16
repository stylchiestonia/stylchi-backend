const 
    express = require("express");
    router = express.Router();
    authController = require('../../controllers/auth')

// @route POST api/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', authController.login);

// @route POST api/register
// @desc Register user
// @access Public
router.post('/register', authController.register);

module.exports = router;