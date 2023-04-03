// Working with Objects in JavaScript
// A lot of the information on how to work with objects in JavaScript has already been covered in this course.
// The example below demonstrates how to use the object data structure to complete a specific task. This task is to 

const result = [];

const drone = {
    speed: 100,
    color: 'yellow'
}

const droneKeys = Object.keys(drone);

droneKeys.forEach( function(key) {
    result.push(key, drone[key]);
});

console.log(result); // ['speed', 100, 'color', 'yellow']