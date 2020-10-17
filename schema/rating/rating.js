const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RatingSchema = new Schema({
    expertId: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    serviceId: {
        type: String,
        required: true
    },
    createdBy: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    updatedBy: {
        type: String
    }
});
module.exports = RatingSchema;