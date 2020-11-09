const 
    express = require("express"),
    router = express.Router(),
    authController = require('../../controllers/auth'),
    categoryController = require('../../controllers/category'),
    expertController = require('../../controllers/expert'),
    bookingsController = require('../../controllers/bookings'),
    galleryController = require('../../controllers/user_images'),
    serviceController = require('../../controllers/service'),
    expertSchedualeController = require('../../controllers/expert_scheduale'),
    bankInfoController = require('../../controllers/bank_info'),
    upload = require("../../middleware/upload");

    const passport    = require('passport');
const auth = passport.authenticate('jwt', {session: false});
    require('../../config/passport');
// @route POST api/login
// @desc Login user and return JWT token
// @access Public
router.post('/expert/login', authController.login);

router.post('/login', authController.login);


// @route POST api/register
// @desc Register user
// @access Public
router.post('/register', authController.register);

// router.post('/verify', authController.verify);

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
router.post('/expert/bookings', passport.authenticate('jwt', {session: false}), bookingsController.getBookings);

// @route POST api/expert/bookings
// @desc Returns all bookings for expert
// @access Public
router.post('/expert/bookings/update', passport.authenticate('jwt', {session: false}), bookingsController.updateBooking);

// @route POST api/expert/current
// @desc Returns all bookings for expert
// @access Public
router.post('/current', passport.authenticate('jwt', {session: false}), expertController.getCurrentUser);

// @route POST api/expert/current
// @desc Returns all bookings for expert
// @access Public
router.post('/current/update',passport.authenticate('jwt', {session: false}), expertController.updateCurrentUser);

// @route POST api/expert/scheduale
// @desc Returns expert scheduale
// @access Public
router.post('/expert/scheduale', passport.authenticate('jwt', {session: false}),expertSchedualeController.getExpertScheduale);

// @route POST api/expert/scheduale
// @desc Returns expert scheduale
// @access Public
router.post('/expert/scheduale/update', passport.authenticate('jwt', {session: false}), expertSchedualeController.updateExpertScheduale);

// @route POST api/expert/scheduale
// @desc Returns expert scheduale
// @access Public
router.post('/expert/gallery/upload', passport.authenticate('jwt', {session: false}), upload.single('photo'), galleryController.uploadUserImage);
router.post('/expert/gallery/update', passport.authenticate('jwt', {session: false}), galleryController.updateImages);

// @route POST api/expert/scheduale
// @desc Returns expert scheduale
// @access Public
router.post('/expert/gallery', passport.authenticate('jwt', {session: false}), galleryController.getCurrentUserImages);

// @route POST expert/service/create
// @desc Returns expert scheduale
// @access Public
router.post('/expert/service/create', passport.authenticate('jwt', {session: false}), serviceController.createExpertService);

router.post('/expert/services', passport.authenticate('jwt', {session: false}), serviceController.getExpertServices);

router.post('/expert/service/delete', passport.authenticate('jwt', {session: false}), serviceController.deleteExpertService);

router.post('/expert/service/update', passport.authenticate('jwt', {session: false}), serviceController.updateExpertService);

router.post('/user/bank/info', passport.authenticate('jwt', {session: false}), bankInfoController.getBankInfo);
router.post('/user/bank/update', passport.authenticate('jwt', {session: false}), bankInfoController.createorUpdateBankInfo);



router.get('/', (req, res) => {
    return res.status(200).json(
        "Api is live"
    );
  });
module.exports = router;