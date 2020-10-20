const bookingModel = require("../models/booking/booking");

exports.createBooking = (req, res) => {

}

exports.updateBooking = (req, res) => {
    
}

exports.deleteBooking = (req, res) => {
    
}

exports.getAllBookings = async (req, res) => {
    const expertId = req.body.expert_id;
    let bookings = await bookingModel.getAllBookings(expertId);
    return res.status(200).json({ bookings: bookings });
}

exports.getBookings = async (req, res) => {
    const status = req.body.status;
    const expertId = req.body.expert_id;
    let bookings;
    if( status === 'pending' ) {
        bookings = await bookingModel.getPendingBookings(expertId);
    } else if (status === 'upcoming') {
        bookings = await bookingModel.getUpcomingBookings(expertId);
    } else if (status === 'past') {
        bookings = await bookingModel.getPastBookings(expertId);
    }
    return res.status(200).json( bookings );
}

exports.updateBooking = async (req, res) => {
    const expertId = req.body.expert_id;
    const booking = req.body.booking;
    await bookingModel.updateBooking(booking, expertId);
    const bookings = await bookingModel.getPendingBookings(expertId);
    console.log('--------in controller---', bookings);
    return res.status(200).json( bookings );
}