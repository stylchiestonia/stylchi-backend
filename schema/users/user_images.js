const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserImageSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    thumbnailWidth: {
        type: Number,
        default: 240
    },
    thumbnailHeight:  {
        type: Number,
        default: 240
    },
    caption:  {
        type: String,
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