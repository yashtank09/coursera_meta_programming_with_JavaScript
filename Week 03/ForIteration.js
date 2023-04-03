// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (d of dairy) {
        console.log(d);
    }
}

logDairy();


// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (Key of Object.keys(bird)) {
        console.log(Key + ": " + bird[Key])
    }
}

birdCan()

// Task 3
function animalCan() {
    for (obs in bird) {
        console.log(obs +": " +bird[obs]);
    }
}

animalCan();