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

createExpertSchedualeOnRegister = async (expertId) => {
    return expertScheduale.create({
        expertId: expertId,
        availability: [
            {
                day: [
                {en: 'Monday'},
                {est: "esmaspäev"},
                {rus: "Понедельник"} 
            ],
                from: '9:00 AM',
                to: '9:00 PM',
                status: 1
            },
            {
                day: [
                    {en: 'Tuesday'},
                    {est: "teisipäev"},
                    {rus: "Вторник"} 
                ],
                from: '9:00 AM',
                to: '9:00 PM',
                status: 1
            },
            {
                day: [
                    {en: 'Wednesday'},
                    {est: "kolmapäev"},
                    {rus: "Среда"} 
                ],
                from: '9:00 AM',
                to: '9:00 PM',
                status: 1
            },
            {
                day: [
                    {en: 'Thursday'},
                    {est: "neljapäev"},
                    {rus: "Четверг"} 
                ],
                from: '9:00 AM',
                to: '9:00 PM',
                status: 1
            },
            {
                day: [
                    {en: 'Friday'},
                    {est: "reede"},
                    {rus: "Пятница"} 
                ],
                from: '9:00 AM',
                to: '9:00 PM',
                status: 1
            },
            {
                day: [
                    {en: 'Saturday'},
                    {est: "laupäev"},
                    {rus: "Суббота"} 
                ],
                from: '9:00 AM',
                to: '9:00 PM',
                status: 1
            },
            {
                day: [
                    {en: 'Sunday'},
                    {est: "pühapäev"},
                    {rus: "Воскресенье"} 
                ],
                from: '9:00 AM',
                to: '9:00 PM',
                status: 1
            }
        ],
        createdBy: expertId
        });
  
}
module.exports = {
    getExpertScheduale,
    findAndUpdateExpertScheduale,
    createExpertSchedualeOnRegister
}