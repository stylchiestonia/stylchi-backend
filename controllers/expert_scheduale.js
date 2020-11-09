const expertSchedualeModel = require("../models/expert_scheduale/expert_scheduale");

exports.getExpertScheduale = async (req, res) => {
    let userId = req.user._id;
    try {
        let result;
        if (userId) {
            result = await expertSchedualeModel.getExpertScheduale(userId);
            return res.status(200).json(result);
        }
    } catch (e) {
        return res.status(400).json('An error has occurred');
    }

}
exports.updateExpertScheduale = async (req, res) => {
    let scheduale = req.body.scheduale;
    try {
        let result;
        if (scheduale) {
            console.log('-----req.user------', req.user);
            let userId = req.user._id;
            await expertSchedualeModel.findAndUpdateExpertScheduale(scheduale);
            result = await expertSchedualeModel.getExpertScheduale(userId);
            return res.status(200).json(result);
        }
    } catch (e) {
        return res.status(400).json('An error has occurred');
    }
}
