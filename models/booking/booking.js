const mongoose = require("mongoose");
const BookingSchema = require('../../schema/booking/booking');
const Booking = mongoose.model('bookings', BookingSchema);

getAllBookings = () => {
    console.log('------here i am')
    return Booking.find();
};

getPendingBookings = (expertId) => {
    return Booking.find({
        expertId: expertId,
        status: 'pending'
    });
}


// createCategory = (category, adminId) => {
//     return Category.create({
//         categoryName: category.categoryName,
//         createdBy: adminId,

//     });
// };

// updateCategory = (category, adminId) => {
//     return Category.create({
//         categoryName: category.categoryName,
//         updatedByBy: adminId,
//     }).where('id').equals(category.id);
// };
module.exports = {
    getPendingBookings,
    getAllBookings
}