const mongoose = require("mongoose");

const availabilitySchema = new Schema({
    expertId: {
        type: String,
        required: true
    },
    availability: [
        {
            day: {
                type: String
            },
            from: { type: String},
            to: { type: String},
            status: { type: String}
        }
    ],
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

module.exports = availability = mongoose.model("service", availabilitySchema);