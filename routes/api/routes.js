const 
    express = require("express"),
    router = express.Router(),
    authController = require('../../controllers/auth'),
    categoryController = require('../../controllers/category'),
    expertController = require('../../controllers/expert'),
    bookingsController = require('../../controllers/bookings');

// @route POST api/login
// @desc Login user and return JWT token
// @access Public
router.post('/login', authController.login);

// @route POST api/register
// @desc Register user
// @access Public
router.post('/register', authController.register);

// @route GET api/category
// @desc Returns all categories
// @access Public
router.get('/categories', categoryController.getAllCategories);

// @route GET api/category
// @desc Returns all categories
// @access Public
router.get('/experts', expertController.getAllExperts);

// @route GET api/bookings
// @desc Returns all bookings
// @access Public
router.get('/bookings', bookingsController.getAllBookings);

// @route GET api/expert/bookings
// @desc Returns all bookings for expert
// @access Public
router.post('/expert/bookings', bookingsController.getBookings);
module.exports = router;