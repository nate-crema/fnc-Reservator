const { fncRsv } = require("../lib");


/*


Essencial parameter: timeType(String), periodNum(Number), timeValue(Object), reservFnc(function)

timeType: periodic | specific(this example) | onetime
periodNum: Number that you want to run function (0: unlimit)
timeValue: {
    optionSetter: HH || MM || SS,
    optionValue: value that match with 'optionSetter'
}
(ex: If you want to run function at 21:00
    -> timeValue: {
        optionSetter: "HH",
        optionValue: 21
    }
)
reservFnc: Function that you want to run periodic

fncRsv: (timeType: string, periodNum: number, timeValue: object, reservFnc: function) => String


*/

// example2: run function looping periodically at aspecific time

const testFunction = function () { 
    console.log(`Hello, fncRsv! Logged time is ${Date()}`);
}



const regMsg = fncRsv("specific", 0, {
    optionSetter: "SS",
    optionValue: 40
}, testFunction);
console.log(regMsg); // fncRsv's message