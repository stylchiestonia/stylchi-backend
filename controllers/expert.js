const userModel = require("../models/users/user");
exports.updateProfile = (req, res) => {

}

exports.archiveProfile = (req, res) => {
    const role = req.body.role;

}

exports.getAllExperts = async (req, res) => {
    const experts = await userModel.getAllExperts();
    return res.status(200).json({ experts: experts });
}
exports.getCurrentUser = async (req, res) => {
    try {
        const userId = req.user._id;
        const role = req.body.role;
        let result;
        if (userId && role) {
            result = await userModel.getCurrentUser(userId, role);
        }
        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).json('An error has occurred');
    }



}
exports.updateCurrentUser = async (req, res) => {
    let user = req.body.currentUser;
    let result;
    try {
        if (user) {
            result = await userModel.findAndUpdateCurrentUser(user);
        }
        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).json('An error has occured');
    }
}
exports.getFilteredExperts = (req, res) => {

}

exports.changePassword = (req, res) => {

}

exports.deleteExpert = (req, res) => {

}