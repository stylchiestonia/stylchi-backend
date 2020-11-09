const mongoose = require("mongoose");
const UserImageSchema = require('../../schema/users/user_images');
const UserImage = mongoose.model('user_images', UserImageSchema);
createUserImage = (userId, imageUrl) => {
    return UserImage.create({
        userId: userId,
        src: imageUrl,
        thumbnail: imageUrl
    });
    
};
findAndUpdateCurrentUser = async (userId, image) => {
    return await UserImage.findOneAndUpdate( { _id: image._id, userId: userId }, image, { new: false }, ( error, obj ) => {
        if( error ) {
            return error ;
        }
        return obj;
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
    getImagesByUserId,
    findAndUpdateCurrentUser
}