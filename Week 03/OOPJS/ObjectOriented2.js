// Object Oriented Programming Car example
class Car {
    // properties for car key for truning it on
    startKey = null;
    traveledMiles = 0;

    // constructor for starting instrument cluster
    constructor(){
        console.log("Honda CIVIC | VDI Engine | With Pannoramic Moon Roof");
        
    }

    // method for starting engine
    engineStrat(){
        if(this.startKey === true){
            console.log("\nCar engine is started...");
        } else {
            console.log("\nEngine have a some Error! pelase check and fix it.");
        }
    }

    excelearator(){
        console.log("\nCar is running on the ROAD...");
        this.traveledMiles += 10;
        console.log("Miles car ran: "+ this.traveledMiles);
    }

}

var car = new Car();

car.startKey = true;

car.engineStrat();

car.excelearator();
car.excelearator();
car.excelearator();
car.excelearator();
car.excelearator();
