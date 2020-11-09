const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    categoryEng: {
        type: String,
        required: true
    },
    categoryEst: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    updatedBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    isArchived: {
        type: Boolean,
        default: false
    }
});

module.exports = categorySchema;