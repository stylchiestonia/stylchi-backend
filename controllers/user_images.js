const userImagesModel = require("../models/users/user_images");
const fs = require('fs');
const AWS = require('aws-sdk');
const md5 = require('md5');
const s3 = new AWS.S3({
    accessKeyId: 'AKIARYKWNQV3FHFNOEML',
    secretAccessKey: '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'
});
exports.uploadUserImage = async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.send(`You must select a file.`);
        }
        console.log(req.file);
        const data = await uploadImageToStorage(req.file);
        let userId = req.file.user_id;
        await userImagesModel.createUserImage("5f89b74c785a191b10dab1ac", data.Location);
        return res.status(200).json(userImagesModel);
    } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    }

}
const renameImage = file => md5(Date.now()) + '.' + file.originalname.replace(/ /g, '-').split('.').pop()
const uploadImageToStorage = (file) => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: 'stylchi-images',
            ACL: 'public-read',
            Key: renameImage(file),
            Body: file.buffer
        };
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err)
            }
            resolve(data);
            console.log(`File uploaded successfully. ${JSON.stringify(data)}`);
        });
    });
}
exports.getCurrentUserImages = async (req, res) => {
    let userId = req.body.user_id;
    const userImages =await userImagesModel.getImagesByUserId(userId);
    console.log('------------', userImages);
    return res.status(200).json(userImages);

}
