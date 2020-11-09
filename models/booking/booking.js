const mongoose = require("mongoose");
const BookingSchema = require('../../schema/booking/booking');
const Booking = mongoose.model('bookings', BookingSchema);

getAllBookings = () => {
    return Booking.find();
};

getBookings = (expertId, status) => {
    return Booking.find({
        expertId: expertId,
        status: status
    });
}
getUpcomingBookings = (expertId) => {
    return Booking.find({
        expertId: expertId,
        status: 'upcoming'
    });
}
getPastBookings = (expertId) => {
    return Booking.find({
        expertId: expertId,
        status: 'past'
    });
}
updateBooking = (booking, expertId) => {
    return Booking.update({
        status: booking.status,
        updatedBy: expertId,
    }).where('_id').equals(booking._id);
};
module.exports = {
    getBookings,
    getAllBookings,
    updateBooking,
    getPastBookings,
    getUpcomingBookings
}