const mongoose = require("mongoose");
const expertSchedualeSchema = require('../../schema/expert_scheduale/expert_scheduale');
const expertScheduale = mongoose.model('expert_scheduale', expertSchedualeSchema);

getExpertScheduale = async(expertId) => {
    return await expertScheduale.findOne({
        expertId: expertId
    });
};
findAndUpdateExpertScheduale = async (scheduale) => {
    await expertScheduale.findOneAndUpdate( { _id: scheduale._id }, scheduale, { new: true }, ( error, obj ) => {
        if( error ) {
            return error ;
        }
        return obj;
    });
   const updateScheduale = await getExpertScheduale(scheduale.expertId);
   return updateScheduale;    

};
module.exports = {
    getExpertScheduale,
    updateCategory,
    getAllCategories,
    findAndUpdateExpertScheduale
}