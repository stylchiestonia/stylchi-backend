const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserImageSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
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
    },
    isArchived: {
        type: Boolean,
        default: false
    }
});
module.exports = UserImageSchema;