const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
    categoryName: {
        type: String,
        required: true
    },
    categoryId: {
        type: String,
        required: true
    },
    expertId: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    type: {
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

module.exports = service = mongoose.model("service", serviceSchema);