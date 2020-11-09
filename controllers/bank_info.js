const BankInfoModel = require("../models/bank_info/bank_info");


exports.getBankInfo= async (req, res) => {
    try {
        const userId = req.user._id;
        let result;
        if (userId) {
            result = await BankInfoModel.getBankInfo(userId);

        } else {
            return res.status(400).json('No user exist');
        }
        return res.status(200).json(result);
    } catch (e) {
        console.log(e);
        return res.status(400).json('An error has occurred');
    }
}

exports.createorUpdateBankInfo= async (req, res) => {
    try {
        const userId = req.user._id;
        const bankInfo = req.body.bankInfo;
        let result;
        if (userId) {
            await BankInfoModel.createOrUpdateBankInfo(bankInfo, userId);
            result = await BankInfoModel.getBankInfo(userId);
        } else {
            return res.status(400).json('No user exist');
        }
        return res.status(200).json(result);
    } catch (e) {
        console.log(e);
        return res.status(400).json('An error has occurred');
    }
}