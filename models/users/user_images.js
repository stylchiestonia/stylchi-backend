const mongoose = require("mongoose");
const UserImageSchema = require('../../schema/users/user_images');
const UserImage = mongoose.model('user_images', UserImageSchema);
createUserImage = (userId, imageUrl) => {
    return UserImage.create({
        userId: userId,
        imageUrl: imageUrl
    });
    
};

getImagesByUserId= (userId) => {
    return UserImage.find({
        userId: userId,
        isArchived: false
    });
};
module.exports = {
    createUserImage,
    getImagesByUserId
}