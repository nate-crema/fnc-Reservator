const { fncRsv } = require("../lib");


/*


Essencial parameter: timeType(String), periodNum(Number), timeValue(Number), reservFnc(function)

timeType: periodic(this example) | specific | onetime
periodNum: Number that you want to run function (0: unlimit)
timeValue: Interval that you want to run function
reservFnc: Function that you want to run periodic

fncRsv: (timeType: string, periodNum: number, timeValue: number, reservFnc: function) => void


*/

// example1: run function looping periodically at aspecific time interval

const testFunction = function () { 
    console.log(`Hello, fncRsv! Logged time is ${Date()}`);
}



const regMsg = fncRsv("periodic", 5, 1000, testFunction);
console.log(regMsg); // fncRsv's message