module.exports.periodic = function (timeType, periodNum, timeValue, reservFnc) { 
    if (periodNum == undefined || !timeValue || !reservFnc) {
        return new Error("Function values isn't valid.");
    } else if (typeof periodNum != "number") {
        return new Error(`value 'periodNum' requires type 'number', but type ${typeof periodNum} comes in.`);
    } else {
        if (periodNum == 0) {
            // looping function
            // timeValue: interval time (milisecond)
            function loopFnc() {
                return new Promise((resolve, reject) => {
                    try {
                        // console.log("start!");
                        setTimeout(function () {
                            reservFnc();
                            resolve(loopFnc());
                        }, timeValue);
                    } catch (e) {
                        reject(e);
                    }
                })
            }
            loopFnc();
            // setTimeout(loopFnc(), timeValue);
            return `Function successfully registered. Function will run ${new Date(Date.now() + timeValue)} at first`;
        } else {
            // period count setted
            // looping function (while counter > 0);
            // timeValue: interval time (milisecond)
            function loopFnc(counter) {
                return new Promise((resolve, reject) => {
                    try {
                        // console.log("start!");
                        setTimeout(function () {
                            reservFnc();
                            if (counter > 1) resolve(loopFnc(counter - 1));
                            else resolve("fncRegular: Complete");
                        }, timeValue);
                    } catch (e) {
                        reject(e);
                    }
                })
            }
            loopFnc(periodNum);
            return `Function successfully registered. Function will run ${new Date(Date.now() + timeValue)} at first, and end after function runs ${periodNum} time${periodNum == 1 ? '' : 's'}`;
        }
    }
}