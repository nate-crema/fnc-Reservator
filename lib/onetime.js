module.exports.onetime = function (timeType, periodNum, timeValue, reservFnc) { 
    
    // timeValue: YYYYMMDDHHMMSS

    // reference: https://today-hello.tistory.com/13
    if (!timeValue || !reservFnc) {
        return new Error("Function values isn't valid.");
    } else if (periodNum) {
        return new Error(`fncRegular Type '${timeType}' doesn't support both 'timeType' option and 'periodNum' option`);
    } else if (typeof timeValue != "string") {
        return new Error(`value 'timeValue' requires type 'string', but type ${typeof periodNum} comes in.`);
    } else {
        var year = Number(timeValue.substring(0, 4));
        var month = Number(timeValue.substring(4, 6));
        var day = Number(timeValue.substring(6, 8));
        var time = Number(timeValue.substring(8, 10));
        var minute = Number(timeValue.substring(10, 12));
        var second = Number(timeValue.substring(12, 14));
    
        var oprDate = new Date(year, month-1, day, time, minute, second);
        var nowDate = new Date();
    
        var timer = oprDate.getTime() - nowDate.getTime();
        if (timer < 0) {
            return new Error(`Module Started time (${nowDate}) is later than function start time (${oprDate})`);
        } else {
            setTimeout(reservFnc, timer);
            return `Function successfully registered. Function will run ${new Date(nowDate.getTime() + timer)} at first`;
        }
    }
}