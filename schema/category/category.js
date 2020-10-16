const mongoose = require("mongoose");

const categorySchema = new Schema({
    categoryName: {
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

module.exports = category = mongoose.model("category", categorySchema);