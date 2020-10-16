const mongoose = require("mongoose");

const serviceSchema = new Schema({
    customerId: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    services: [String],
    customerAddress: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'upcoming', 'past'],
        required: true
    },
    payment: {
        type: String,
        enum: ['cash', 'creditcard'],
        required: true
    },
    time: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    instructions: {
        type: String
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