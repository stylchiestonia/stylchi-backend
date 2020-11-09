const serviceModel = require("../models/service/service");
var _ = require('lodash');


getExpertServicesWithCategory = async (userId, categoryLang) => {
    const services = await serviceModel.getExpertActiveServices(userId);
    return _.mapValues(_.groupBy(services, categoryLang),
        clist => clist.map(services => _.omit(services, categoryLang)));
}
exports.getExpertServices = async (req, res) => {
    try {
        let result;
        if (req.user) {
           let resultEng = await getExpertServicesWithCategory(req.user._id, "categoryEng");
           let resultEst = await getExpertServicesWithCategory(req.user._id, "categoryEst")
            result = {
                en: resultEng,
                est: resultEst                
            }
           
           
        }
        return res.status(200).json(result);
    } catch {
        
        return res.status(400).json('An error has occurred')
    }

}

exports.createExpertService = async (req, res) => {
    try {
        let result;
        if (req.user) {
            await serviceModel.createService(req.body.service, req.user._id, req.body.category); 
            let resultEng = await getExpertServicesWithCategory(req.user._id, "categoryEng");
            let resultEst = await getExpertServicesWithCategory(req.user._id, "categoryEst")
            result = {
                en: resultEng,
                est: resultEst                
            }
        }
        return res.status(200).json(result);
    } catch (e) {
        console.log('-----', e)
        return res.status(400).json('An error has occurred')
    }

}

exports.deleteExpertService = async (req, res) => {
    try {
        let result;
        if (req.user) {
            await serviceModel.deleteService(req.body.service);
            let resultEng = await getExpertServicesWithCategory(req.user._id, "categoryEng");
            let resultEst = await getExpertServicesWithCategory(req.user._id, "categoryEst")
            result = {
                en: resultEng,
                est: resultEst                
            }
        }
        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).json('An error has occurred')
    }
}
exports.updateExpertService = async (req, res) => {
    try {
        const service = req.body.service;
        const expertId = req.user._id;
        let result;
        if (expertId) {
            await serviceModel.findAndUpdateExpertService(service, expertId);
            let resultEng = await getExpertServicesWithCategory(req.user._id, "categoryEng");
            let resultEst = await getExpertServicesWithCategory(req.user._id, "categoryEst")
            result = {
                en: resultEng,
                est: resultEst                
            }
        }
        return res.status(200).json(result);
    } catch (e) {
        return res.status(400).json('An error has occurred')
    }
}