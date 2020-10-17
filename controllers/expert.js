const expertModel = require("../models/users/user");

exports.updateProfile = (req, res) => {

}

exports.archiveProfile = (req, res) => {
    const role = req.body.role;
    
}

exports.getAllExperts = async(req, res) => {
    const experts = await expertModel.getAllExperts();
    return res.status(200).json({ experts: experts });
}
exports.getCurrentExpert = (req, res) => {

}

exports.getFilteredExperts = (req, res) => {

}

exports.changePassword = (req, res) => {

}

exports.deleteExpert = (req, res) => {
    
}