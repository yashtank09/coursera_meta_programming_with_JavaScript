// create your classes here
class Bird {
    useWings(){
        console.log("Flying!");
    }
}

// Eagle inherited Bird class
class Eagle extends Bird {
    useWings(){
        super.useWings();
        console.log("Barely flapping!");
    }
}

// Penguin inherited Bird class
class Penguin extends Eagle {
    useWings(){
        console.log("Diving!");
    }
}

var baledEagle = new Eagle();
baledEagle.useWings(); // Flying! Barely flapping!
var kingPenguin = new Penguin();
kingPenguin.useWings(); // Diving!