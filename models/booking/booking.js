const mongoose = require("mongoose");
const BookingSchema = require('../../schema/booking/booking');
const Booking = mongoose.model('bookings', BookingSchema);

getAllBookings = () => {
    return Booking.find();
};

getPendingBookings = (expertId) => {
    return Booking.find({
        expertId: expertId,
        status: 'pending'
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
    getPendingBookings,
    getAllBookings,
    updateBooking,
    getPastBookings,
    getUpcomingBookings
}