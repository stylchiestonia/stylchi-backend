const Multer = require("multer");

const uploadFile = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 
  }
});
module.exports = uploadFile;