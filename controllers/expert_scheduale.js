const expertSchedualeModel = require("../models/expert_scheduale/expert_scheduale");

exports.getExpertScheduale = async (req, res) => {
    let userId = req.body.user_id;
    const expertScheduale =await expertSchedualeModel.getExpertScheduale(userId);
    return res.status(200).json(expertScheduale);
}
exports.updateExpertScheduale = async (req, res) => {
    let scheduale = req.body.scheduale;
    const expertScheduale =await expertSchedualeModel.findAndUpdateExpertScheduale(scheduale);
    return res.status(200).json(expertScheduale);
}
