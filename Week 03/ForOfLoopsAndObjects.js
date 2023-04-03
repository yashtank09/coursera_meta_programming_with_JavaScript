const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log('--- for-in is unrealiable ---');
for(prop in sportsCar){
    console.log(prop);
}
console.log('😊', "Iterating over object AND its prototype!");

console.log('--- for-of is reliable ----');
for(prop of Object.keys(sportsCar)){
    console.log(prop+": "+sportsCar[prop]);
}
console.log('🎯', "Iterating over object's OWN PROPERTIES only!");

console.log("\n---- Car2 object -----")
const car2 = {
    engine: true
}

const sportsCar2 = Object.create(car2);
sportsCar2.speed = "fast";
console.log("The sportsCar object; ", sportsCar);

for(prop in sportsCar2){
    console.log('😊', prop);
}

for(prop of Object.keys(sportsCar2)){
    console.log('🎯', prop + ": " + sportsCar2[prop]);
}