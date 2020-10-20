const userModel = require("../models/users/user");
const expertSchedualeModel = require("../models/expert_scheduale/expert_scheduale");

exports.updateProfile = (req, res) => {

}

exports.archiveProfile = (req, res) => {
    const role = req.body.role;
    
}

exports.getAllExperts = async(req, res) => {
    const experts = await userModel.getAllExperts();
    return res.status(200).json({ experts: experts });
}
exports.getCurrentUser = async (req, res) => {
    let userId = req.body.user_id;
    let role = req.body.role;
    const currentUser =await userModel.getCurrentUser(userId, role);
    return res.status(200).json(currentUser);

}
exports.updateCurrentUser = async (req, res) => {
    let user = req.body.currentUser;
    const currentUser =await userModel.findAndUpdateCurrentUser(user);
    return res.status(200).json(currentUser);

}
exports.getFilteredExperts = (req, res) => {

}

exports.changePassword = (req, res) => {

}

exports.deleteExpert = (req, res) => {
    
}