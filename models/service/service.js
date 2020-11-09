const mongoose = require("mongoose");
const ServiceSchema = require('../../schema/service/service');
const Service = mongoose.model('service', ServiceSchema);

getAllServices = () => {
    return Service.find();
};

getExpertActiveServices = (expertId) => {
    return Service.find({
        expertId: expertId,
        isArchived: false
    });
};
createService = (service, expertId, category) => {
    return Service.create({
        categoryId: category.categoryId,
        categoryEng: category.categoryEng,
        categoryEst: category.categoryEst,
        expertId: expertId,
        serviceName: service.serviceName,
        price: service.price,
        duration: service.duration,
        createdBy: expertId
    });
};
deleteService = (service) => {
    console.log("inside service model", service)
    return Service.update({
        isArchived: true
    }).where('_id').equals(service._id);
};
findAndUpdateExpertService = async (service, expertId) => {
    return Service.findOneAndUpdate( { _id: service._id, expertId: expertId }, service, { new: true }, ( error, obj ) => {
        if( error ) {
            return error ;
        }
        return obj;
    });
};

module.exports = {
    createService,
    getExpertActiveServices,
    getAllServices,
    deleteService,
    findAndUpdateExpertService
}