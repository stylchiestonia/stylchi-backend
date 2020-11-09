const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bankInfoSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    ibanNumber: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    bankAddress: {
        type: String,
        required: true
    },
    swiftCode: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }
});
module.exports = bankInfoSchema;