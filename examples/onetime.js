const { fncRsv } = require("../lib");


/*


Essencial parameter: timeType(String), periodNum(NULL), timeValue(String), reservFnc(function)

timeType: periodic | specific | onetime (this example)
periodNum: null (no need in this option)
timeValue: Time that run function (YYYYMMDDHHMMSS)
reservFnc: Function that you want to run periodic

fncRsv: (timeType: string, periodNum: null, timeValue: string, reservFnc: function) => void


*/

// example3: run function at specific time just once

const testFunction = function () { 
    console.log(`Hello, fncRsv! Logged time is ${Date()}`);
}



const regMsg = fncRsv("onetime", null, "20200808201600", testFunction);
console.log(regMsg); // fncRsv's message