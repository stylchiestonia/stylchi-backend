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
    try {
        const status = req.body.status;
        const user = req.user;
        let bookings;
        bookings = await bookingModel.getBookings(user._id, status);
        return res.status(200).json(bookings);
    } catch (e) {
        console.log(e);
        return res.status(400);
    }
}

exports.updateBooking = async (req, res) => {
    try {
        const status = req.body.status;
        const user = req.user;
        const booking = req.body.booking;
        await bookingModel.updateBooking(booking, user._id);
        const bookings = await bookingModel.getBookings(user._id, status);
        return res.status(200).json(bookings);
    } catch (e) {
        console.log(e);
        return res.status(400);
    }

}