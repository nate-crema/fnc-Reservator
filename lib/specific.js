module.exports.specific = function (timeType, periodNum, timeValue, reservFnc) { 
    /*

    timeValue: Object {
        optionSetter: HH/MM/SS,
        optionValue
    }

    */
    if (periodNum == undefined || !timeValue || !reservFnc) {
        return new Error("Function values isn't valid.");
    } else if (typeof periodNum != "number") {
        return new Error(`value 'periodNum' requires type 'number', but type ${typeof periodNum} comes in.`);
    } else {
        if (periodNum == 0) {
            // looping function

            let intervalTime = 0;

            function loopFnc() {
                return new Promise((resolve, reject) => {
                    try {
                        // console.log("start!");
                        reservFnc();
                        setTimeout(function () {
                            resolve(loopFnc());
                        }, intervalTime);
                    } catch (e) {
                        reject(e);
                    }
                })
            }

            // function starttime
            let startInterval;
            let startTime;
            const baseTime = new Date();
            const Year = baseTime.getFullYear();
            const Month = baseTime.getMonth();
            const Day = baseTime.getDate();
            const Hours = baseTime.getHours();
            const Minutes = baseTime.getMinutes();
            const Seconds = baseTime.getSeconds();

            // function run interval
            switch (timeValue.optionSetter) {
                case "HH":
                    intervalTime = 24 * 60 * 60 * 1000;
                    startTime = new Date(Year, Month, Day, timeValue.optionValue, Minutes, Seconds);
                    startInterval = startTime.getTime() - new Date().getTime();
                    if (startInterval < 0) {
                        startTime = new Date(Year, Month, Day+1, timeValue.optionValue, Minutes, Seconds);
                        startInterval = startTime.getTime() - new Date().getTime();
                    }
                    break;
                case "MM":
                    intervalTime = 60 * 60 * 1000;
                    startTime = new Date(Year, Month, Day, Hours, timeValue.optionValue, Seconds);
                    startInterval = startTime.getTime() - new Date().getTime();
                    if (startInterval < 0) {
                        startTime = new Date(Year, Month, Day, Hours+1, timeValue.optionValue, Seconds);
                        startInterval = startTime.getTime() - new Date().getTime();
                    }
                    break;
                case "SS":
                    intervalTime = 60000;
                    startTime = new Date(Year, Month, Day, Hours, Minutes, timeValue.optionValue);
                    startInterval = startTime.getTime() - new Date().getTime();
                    if (startInterval < 0) {
                        startTime = new Date(Year, Month, Day, Hours, Minutes+1, timeValue.optionValue);
                        startInterval = startTime.getTime() - new Date().getTime();
                    }
                    break;
                default:
                    return;
                    break;
            }
            // startInterval < 0 ? startInterval *= new Date(Year, Month, Day, Hours, Minutes, Seconds) : startInterval; 

            setTimeout(() => {
                loopFnc();
            }, startInterval);
            // setTimeout(loopFnc(), timeValue);
            return `Function successfully registered. Function will run ${startTime} at first (startInterval: ${startInterval} / loopInterval: ${intervalTime})`;
        } else {
            // period count setted
            // looping function (while counter > 0);
            let intervalTime = 0;

            function loopFnc(counter) {
                return new Promise((resolve, reject) => {
                    try {
                        // console.log("start!");
                        reservFnc();
                        if (counter > 1) setTimeout(function () {
                            resolve(loopFnc(counter-1));
                        }, intervalTime);
                        else resolve("fncRegular: Complete");
                    } catch (e) {
                        reject(e);
                    }
                })
            }

            // function starttime
            let startInterval;
            let startTime;
            const baseTime = new Date();
            const Year = baseTime.getFullYear();
            const Month = baseTime.getMonth();
            const Day = baseTime.getDate();
            const Hours = baseTime.getHours();
            const Minutes = baseTime.getMinutes();
            const Seconds = baseTime.getSeconds();

            // function run interval
            switch (timeValue.optionSetter) {
                case "HH":
                    intervalTime = 24 * 60 * 60 * 1000;
                    startTime = new Date(Year, Month, Day, timeValue.optionValue, Minutes, Seconds);
                    startInterval = startTime.getTime() - new Date().getTime();
                    if (startInterval < 0) {
                        startTime = new Date(Year, Month, Day+1, timeValue.optionValue, Minutes, Seconds);
                        startInterval = startTime.getTime() - new Date().getTime();
                    }
                    break;
                case "MM":
                    intervalTime = 60 * 60 * 1000;
                    startTime = new Date(Year, Month, Day, Hours, timeValue.optionValue, Seconds);
                    startInterval = startTime.getTime() - new Date().getTime();
                    if (startInterval < 0) {
                        startTime = new Date(Year, Month, Day, Hours+1, timeValue.optionValue, Seconds);
                        startInterval = startTime.getTime() - new Date().getTime();
                    }
                    break;
                case "SS":
                    intervalTime = 60000;
                    startTime = new Date(Year, Month, Day, Hours, Minutes, timeValue.optionValue);
                    startInterval = startTime.getTime() - new Date().getTime();
                    if (startInterval < 0) {
                        startTime = new Date(Year, Month, Day, Hours, Minutes+1, timeValue.optionValue);
                        startInterval = startTime.getTime() - new Date().getTime();
                    }
                    break;
                default:
                    return;
                    break;
            }
            // startInterval < 0 ? startInterval *= new Date(Year, Month, Day, Hours, Minutes, Seconds) : startInterval; 

            setTimeout(() => {
                loopFnc(periodNum);
            }, startInterval);
            return `Function successfully registered. Function will run ${startTime} at first, and end after function runs ${periodNum} time${periodNum == 1 ? '' : 's'}`;
        }
    }
}