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
    address: {
        residential: {
            street: {
                type: String
            },
            number: {
                type: Number
            },
            city: {
                type: String
            },
            country: {
                type: String
            }
        },
        venue: {
            street: {
                type: String
            },
            number: {
                type: Number
            },
            city: {
                type: String
            },
            country: {
                type: String
            }
        }
    },
    about: {
        type: String
    }
});
module.exports = UserSchema;