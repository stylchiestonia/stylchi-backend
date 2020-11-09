const mongoose = require("mongoose");
const bankInfoSchema = require('../../schema/bank_info/bank_info');
const BankInfo = mongoose.model('bank_infos', bankInfoSchema);

getBankInfo = (userId) => {
    return BankInfo.findOne({
        userId: userId
    });
}
createOrUpdateBankInfo = (bankInfo, userId) => {
    return BankInfo.update({userId: userId},{
        userId: userId,
        ibanNumber: bankInfo.ibanNumber,
      accountNumber: bankInfo.accountNumber,
      bankName: bankInfo.bankName,
      bankAddress: bankInfo.bankAddress,
      swiftCode: bankInfo.swiftCode,
      fullName: bankInfo.fullName,
    },  { upsert: true } );
};
module.exports = {
    getBankInfo,
    createOrUpdateBankInfo
}