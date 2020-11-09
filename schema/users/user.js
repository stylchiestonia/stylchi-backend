const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        enum: ['ENG', 'RUS', 'EST'],
        default: 'ENG'
    },
    phoneNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    role: {
        type: String,
        enum: ['expert', 'customer', 'admin'],
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'others']
    },
    dateOfBirth: {
        type: String,
    },
    isArchived: {
        type: Boolean,
        default: false
    },
    allowContact: {
        type: Boolean,
        default: false
    },
    isRegistered: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
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
    venueName: {
        type: String
    },
    homeExpert: {
        type: Boolean
    },
    salonExpert: {
        type: Boolean
    },
    residential: {
        street: {
            type: String,
            default: ""
        },
        number: {
            type: String,
            default: null
        },
        city: {
            type: String,
            default: ""
        },
        country: {
            type: String,
            default: ""
        },
        postal: {
            type: String,
            default: ""
        }
    },
    inReview: {
        type: String,
        default: true
    },
    maxUpload: {
        type: Number,
        default: 5
    },
    venue: {
        street: {
            type: String,
            default: ""
        },
        number: {
            type: String,
            default: ""
        },
        city: {
            type: String,
            default: ""
        },
        country: {
            type: String,
            default: ""
        },
        postal: {
            type: String,
            default: ""
        }
    },
    about: {
        type: String
    },
    ibanNumber: {
        type: String
    },
    accountNumber: {
        type: String
    },
    bankName: {

    },
    bankAddress: {

    },
    swiftCode: {

    }
});
module.exports = UserSchema;