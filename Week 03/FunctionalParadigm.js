// When writing FP code, we keep data and functionality separate and pass data into functions only when we want something computed.

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

// In functional programming, functions return new values and then use those values somewhere else in the code.

console.log(distance); // <====== THIS HERE!

// Another style is object-oriented programming (OOP). In this style, we group data and functionality as properties and methods inside objects.
// For example, if I have a virtualPet object, I can give it a sleepy property and a nap() method:
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}

// In OOP, methods update properties stored in the object instead of generating new return values.
// For example, if I check the sleepy property on the virtualPet object, I can confirm that it's set to true.
// However, once I've ran the nap() method on the virtualPet object, will the sleepy property's value change?

console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

// JavaScript, it's perfectly normal to pass a function invocation to another function.
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())