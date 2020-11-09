const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const expertSchedualeSchema = new Schema({
    expertId: {
        type: String,
        required: true
    },
    availability: [
        {
            day: [],
            from: { 
                type: String,
                default: '9:00 AM',
                required: true
            },
            to: {   
                type: String,
                default: '9:00 PM',
                required: true
            },
            status: { 
                type: Boolean,
                required: true}
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

module.exports = expertSchedualeSchema;