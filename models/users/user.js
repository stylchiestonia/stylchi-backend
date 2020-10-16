const mongoose = require("mongoose");
const UserSchema = require('../../schema/users/user');
const User = mongoose.model('user', UserSchema);

getUserByEmail = (email) => {
    return User.findOne({
        email: email,
        status: 'active',
    });
};

getUserById= (id) => {
    return User.findOne({
        _id: id,
        status: 'active',
    });
};

createUser = (user) => {
    return User.create({
        firstName: user.firstname,
        lastName: user.lastname,
        email: user.email,
        password: user.password,
        language: user.language,
        phoneNumber: user.phonenumber,
        allowContact: user.allowcontact,
        role: user.role,
        createdAt: Date.now(),
        status: 'active',
    });
    
};
/* 
        Expert
*/
// get all experts
getAllExperts = () => {
    return expert = User.find({
        status: "active",
        role: 'expert'
    });
};
// get expert
getExpert = (expertId) => {
    return expert = User.findOne({
        id: expertId,
        status: "active",
        role: 'expert'
    });
};

// check if user is expert
isUserExpert = (user) => {
    let result = User.findOne({
        id: user.id,
        status: 'expert',
        role: 'active'
    });
    return result ? true : false
};

// check if user is active 
isExpertActive = (expert) => {
    let result = User.findOne({
        id: user.id,
        status: 'expert',
        role: 'active'
    });
    return result ? true : false
};
// filter venue/home experts
getfilteredExperts = (filter) => {
    User.find({ 
        role: 'expert',
        status: 'active',
        delivery: filter
    });

};

// update expert
updateExpert = (expert) => {
    if (this.isExpertExist(expert)) {
        User.update({
            firstName: expert.firstName,
            lastName: expert.lastName,
            phoneNumber: expert.phoneNumber,
            gender: expert.gender,
            dateOfBirth: expert.dateOfBirth,
            updatedAt: Date.now(),
            venueName: expert.venueName,
            about: expert.about,
            residentialAddress: {
                street: expert.street,
                number: expert.number,
                city: expert.city,
                country: expert.country
            },
            venueAddress: {
                street: expert.street,
                number: expert.number,
                city: expert.city,
                country: expert.country
            }
        }).where('id').equals(expert.id);
    }
    return;
};

// change account password 
changePassword = (expert) => {
    if (this.isExpertExist(expert) && auth) {
        User.update({
            password: expert.password
        }).where('id').equals(expert.id);
    }
};

// soft delete expert
deleteExpert = (expert) => {
    if (this.isExpertExist(expert)) {
        User.update({
            status: 'inactive',
            isArchived: true
        }).where('id').equals(expert.id);
    }
    return;
};

module.exports = {
    getAllExperts,
    deleteExpert,
    getUserByEmail,
    createUser,
    getUserById
}