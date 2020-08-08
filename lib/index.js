const { periodic } = require('../lib/periodic');
const { specific } = require('../lib/specific');
const { onetime } = require('../lib/onetime');
const fncRsv = function (timeType, periodNum, timeValue, reservFnc) {
    // timeType: periodic | specific | onetime
    switch (timeType) {
        case "periodic":
            return periodic(timeType, periodNum, timeValue, reservFnc);
            break;
        case "specific":
            return specific(timeType, periodNum, timeValue, reservFnc);
            break;
        case "onetime":
            return onetime(timeType, periodNum, timeValue, reservFnc);
            break;
        default:
            break;
    }
}


module.exports.fncRsv = fncRsv;