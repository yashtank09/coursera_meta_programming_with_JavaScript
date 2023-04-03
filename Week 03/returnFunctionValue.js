console.log('Hello')

// own implementation of 'console.log()'
function consoleLog(val) {
    console.log(val);
    return val;
}

var get = consoleLog('World');

console.log(get);

// return double of number
function doublet(num) {
    return num * 2;
}

// build an object with specific value
function objectMaker(value) {
    return {
        prop: value
    }
}

var getObject = objectMaker('My object...');

console.log(getObject);

console.log(objectMaker(20));

console.log(doublet(10).toString());

console.log(objectMaker(doublet(100)));