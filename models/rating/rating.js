const mongoose = require("mongoose");
const RatingSchema = require('../../schema/rating/rating');
const Rating = mongoose.model('rating', RatingSchema);

getExpertRating = (expertId) => {
    return Rating.findAll({
        expertId: expertId
    });
};

createExpertRating = (customerId, expertId, serviceId) => {
    return Rating.create({
        expertId: expertId,
        serviceId: serviceId,
        createdBy: customerId
    });
};
module.exports = {
    getExpertRating,
    createExpertRating
}