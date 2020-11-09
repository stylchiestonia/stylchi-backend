const userImagesModel = require("../models/users/user_images");
const fs = require('fs');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage({ keyFilename: '.../../config/stylchi-backend-293213-0ae2e619ccd5.json' });
const bucket = storage.bucket("stylchi-bucket");
const md5 = require('md5');
const {format} = require('util');
var _ = require('lodash');

exports.uploadUserImage = async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.send({ data:`You must select a file.`});
        }
        let userId = req.user._id;
       let userImages = await userImagesModel.getImagesByUserId(userId);
       if (userImages.length === 5) {
        return res.status(400).json({ data: "Maximum upload limit Reached!"});
       }
        const data = await uploadImageToStorage(req.file);
        
        await userImagesModel.createUserImage(userId, data);
        let updatedImages = await userImagesModel.getImagesByUserId(userId);
        return res.status(200).json(updatedImages);
    } catch (error) {
        console.log(error);
        return res.send({ data:`Error when trying upload images: ${error}`});
    }

}
exports.updateImages = async (req, res) => {
    try {
        
        let userId = req.user._id;
        let images = req.body.images;
        if(images.length > 0) {
            _.forEach( images, async function(image) {
                if (image.isSelected) {
                    image.isArchived = true;
                    await userImagesModel.findAndUpdateCurrentUser(userId, image);
                }
            });
            return res.status(200).json({ data:`updated successfully`});
        }       
        return res.status(200).json({ data:`No image found to update`});
    } catch (error) {
        console.log(error);
        return res.send({ data:`Error when trying update images: ${error}`});
    }

}
exports.getCurrentUserImages = async (req, res) => {
    let userId = req.user._id;
    let userImages = [];
    userImages = await userImagesModel.getImagesByUserId(userId);
    return res.status(200).json(userImages);

}
const addDummyImages = (userImages) => {
    let dummyImages = 5 - userImages.length;
    if(dummyImages > 0) {
        let dummyImage = {
            src: "https://storage.googleapis.com/stylchi-bucket/dummy-placeholder-image-400x400.jpg",
            thumbnail: "https://storage.googleapis.com/stylchi-bucket/dummy-placeholder-image-400x400.jpg"
        }
        for(let i =0  ; i < dummyImages; i ++) {
            userImages.push(dummyImage)
        }
    }
    return userImages;

}
const uploadImageToStorage = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No image file');
      }
  
      let newFileName = `${Date.now()}`;
      let fileUpload = bucket.file(newFileName);
  
      const blobStream = fileUpload.createWriteStream({
        metadata: {
          contentType: file.mimetype
        }
      });
  
      blobStream.on('error', (error) => {
        reject('Something is wrong! Unable to upload at the moment.');
      });
  
      blobStream.on('finish', () => {
        // The public URL can be used to directly access the file via HTTP.
        const url = format(`https://storage.googleapis.com/stylchi-bucket/${fileUpload.name}`);
        resolve(url);
      });
  
      blobStream.end(file.buffer);
    });
  }