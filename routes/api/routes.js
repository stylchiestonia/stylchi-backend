const 
    express = require("express"),
    router = express.Router(),
    authController = require('../../controllers/auth'),
    categoryController = require('../../controllers/category'),
    expertController = require('../../controllers/expert'),
    bookingsController = require('../../controllers/bookings'),
    galleryController = require('../../controllers/user_images'),
    expertSchedualeController = require('../../controllers/expert_scheduale');
    const upload = require("../../middleware/upload");
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

// @route POST api/expert/bookings
// @desc Returns all bookings for expert
// @access Public
router.post('/expert/bookings', bookingsController.getBookings);

// @route POST api/expert/bookings
// @desc Returns all bookings for expert
// @access Public
router.post('/expert/bookings/update', bookingsController.updateBooking);

// @route POST api/expert/current
// @desc Returns all bookings for expert
// @access Public
router.post('/current', expertController.getCurrentUser);

// @route POST api/expert/current
// @desc Returns all bookings for expert
// @access Public
router.post('/current/update', expertController.updateCurrentUser);

// @route POST api/expert/scheduale
// @desc Returns expert scheduale
// @access Public
router.post('/expert/scheduale', expertSchedualeController.getExpertScheduale);

// @route POST api/expert/scheduale
// @desc Returns expert scheduale
// @access Public
router.post('/expert/scheduale/update', expertSchedualeController.updateExpertScheduale);

// @route POST api/expert/scheduale
// @desc Returns expert scheduale
// @access Public
router.post('/expert/gallery/upload', upload.single('photo'), galleryController.uploadUserImage);

// @route POST api/expert/scheduale
// @desc Returns expert scheduale
// @access Public
router.post('/expert/gallery', galleryController.getCurrentUserImages);


router.get('/', (req, res) => {
    return res.status(200).json(
        "hello"
    );
  });
module.exports = router;