Function Reservator: Function administration module
=========

## TL:DR
* This project is developed by nate.crema
* If error, please report issuse to github!
* This module's parameter type is change due to 'timeType' option. PLZ check function introduction

------
* email(developer): nate.crema@gmail.com




## Index
* [Introduction](#Introduction)
* [Installing](#Installing)
* [Usage](#Usage)
    * [0.default](#0default)
    * [1.periodic](#1periodic)
    * [2.specific](#2specific)
    * [3.onetime](#3onetime)
* [Reference](#Reference)
    






## Introduction

#### Function-administration module.

fncRsv is a module that helps you use function whenever you want. It's simple, and undependent from other modules.

This module run async, which your server (or browser) can do other works while module standby.
Notice that <b>your server (or browser) can't afford this module if you register lots of functions at once. </b>



## Installing

Use npm: <br>

    $ npm install fncrsv

Use unpkg CDN: <br>

```html
<script src="https://unpkg.com/fncrsv@latest/lib/fncRsv.min.js"></script>
```



## Usage

### 0.default

usage: 

```javascript
fncRsv(timeType, periodNum, timeValue, function);
```

Such parameter's data type exclude <b>'timeType'</b> is different due to 'timeType'

### 1.periodic


usage: 

```javascript
fncRsv("periodic", periodNum, timeValue, function);
```


data type

    periodNum: Number
    timeValue: Number
    reservFnc: Function

data role

    periodNum: Number that you want to run function (0: unlimit)
    timeValue: Interval that you want to run function
    reservFnc: Function that you want to run periodic

example:

```javascript
// example1: run function looping periodically at aspecific time interval

const testFunction = function () { 
    console.log(`Hello, fncRsv! Logged time is ${Date()}`);
}

const regMsg = fncRsv("periodic", 5, 1000, testFunction);
console.log(regMsg); // Function successfully registered. ~

// (1 seconds later)

// Hello, fncRsv! Logged time is ~ (repeat 5 times)
```



### 2.specific


usage: 

```javascript
fncRsv("specific", periodNum, timeValue, function);
```


data type

    periodNum: Number
    timeValue: Object
    reservFnc: Function

structure of 'timeValue'

    timeValue: {
        optionSetter: "HH",
        optionValue: 21
    }

    (ex: If you want to run function at 21:00
        -> timeValue: {
            optionSetter: "HH",
            optionValue: 21
        }
    )

data role

    periodNum: Number that you want to run function (0: unlimit)
    timeValue: {
        optionSetter: option that you want to set basis ("HH" || "MM" || "SS")
        optionValue: value that set basis
    }
    reservFnc: Function that you want to run periodic

example:

```javascript
// example2: run function looping periodically at aspecific time

const testFunction = function () { 
    console.log(`Hello, fncRsv! Logged time is ${Date()}`);
}



const regMsg = fncRsv("specific", 0, {
    optionSetter: "SS",
    optionValue: 40
}, testFunction);
console.log(regMsg); // Function successfully registered. ~

// (everytime when second correct '40')

// Hello, fncRsv! Logged time is ~ (repeat permanent)
```


### 3.onetime


usage: 

```javascript
fncRsv("onetime", periodNum, timeValue, function);
```


data type

    periodNum: NULL (if input, it will be ignored)
    timeValue: String (YYYYMMSSHHMMSS)
    reservFnc: Function

data role

    periodNum: null (no need in this option)
    timeValue: Time that run function (YYYYMMDDHHMMSS)
    reservFnc: Function that you want to run periodic

example:

```javascript
// example3: run function at specific time just once

const testFunction = function () { 
    console.log(`Hello, fncRsv! Logged time is ${Date()}`);
}

const regMsg = fncRsv("onetime", null, "20200808201600", testFunction);
console.log(regMsg); // Function successfully registered. ~

// (when '2020-08-08 20:16:00')

// Hello, fncRsv! Logged time is Sat Aug 08 2020 20:16:00 GMT+0900 (GMT+09:00)
```


## Reference

[https://today-hello.tistory.com/13](https://today-hello.tistory.com/13)
