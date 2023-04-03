/* 
In this reading, I will show you how to create classes in JavaScript, using all the concepts you've learned so far.

Specifically, I'm preparing to build the following inheritance hierarchy:

                  Animal
                 /     \
               Cat     Bird
              /   \       \
        HouseCat  Tiger   Parrot

There are two keywords that are essential for OOP with classes in JavaScript.

These keywords are extends and super.

The extends keyword allows me to inherit from an existing class.

Based on the above hierarchy, I can code the Animal class like this: */

/* 
1. The Animal class' constructor will have two properties: color and energy 

2. The Animal class' prototype will have three methods: isActive(), sleep(), and getColor(). 

3. The isActive() method, whenever ran, will lower the value of energy until it hits 0. The isActive() method will also report the updated value of energy. If energy is at zero, the animal object will immediately go to sleep, by invoking the sleep() method based on the said condition. 

4. The getColor() method will just console log the value in the color property. 
*/

class Animal {
    constructor(color='yellow', energy=100){
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        if(this.energy > 0){
            this.energy -= 20;
            console.log('Energy is increasing, currently at: '+this.energy);
        } else if(this.energy == 0){
            this.sleep();
        }
    }

    sleep(){
        this.energy += 20;
        console.log('Energy is increasing, currently at: '+this.energy);
    }

    getColor(){
        console.log(this.color);
    }
}

/* 
5. The Cat class will inherit from Animal, with the additional sound, canJumpHigh, and canClimbTrees properties specific to the Cat class.
It will also have its own makeSound() method. 
*/

// Then I can code, for example, the Cat sub-class, like this:
class Cat extends Animal {
    constructor(sound='purr', canJumpHigh=true, canClimbTrees=true, color, energy){
        super(color, energy); // getting properties from super class
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound(){
        console.log(this.sound);
    }
}

/* 
6. The Bird class will also inherit from Animal, but is own specific properties will be quite different from Cat.
Namely, the Bird class will have the sound and the canFly properties, and the makeSound method too. 
*/

class Bird extends Animal {
    constructor(sound='chirp', canFly=true, color, energy){
        super(color, energy); // getting properties from super class
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound(){
        console.log(this.sound);
    }
    
}

/*
Note: If I didn't use the super keyword in our sub-classes, once I'd run the above code, I'd get the following
error: Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor. 
*/

/* 
7. The HouseCat class will extend the Cat class, and it will have its own houseCatSound as its special property. Additionally, it will override the makeSound() method from the Cat class, but it will do so in an interesting way.
If the makeSound() method, on invocation, receives a single option argument - set to true, then it will run super.makeSound() - in other words, run the code from the parent class (Cat) with the addition of running the console.log(this.houseCatSound).
Effectively, this means that the makeSound() method on the HouseCat class' instance object will have two separate behaviors, based on whether we pass it true or false. 
*/

class HouseCat extends Cat {
    constructor(houseCatSound="Meow", sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy); // getting properties from super class
        this.houseCatSound = houseCatSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

/* 
8. The Tiger class will also inherit from Cat, and it will come with its own tigerSound property, while the rest of the behavior will be pretty much the same as in the HouseCat class. 
*/

class Tiger extends Cat {
    constructor(tigerSound, sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

/* 
9. Finally, the Parrot class will extend the Bird class, with its own canTalk property, and its own makeSound() method, working with two conditionals: one that checks if the value of true was passed to makeSound during invocation, and another that checks the value stored inside this.canTalk property. 
*/

class Parrot extends Bird {
    constructor(canTalk=false, sound, canFly, color, energy){
        super(sound, canFly,  color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option){
        if(option){
            super.makeSound();
        }
        if(this.canTalk){
            console.log("I'm a talking parrot!")
        }
    }
}

// Creating Instances of various animals
// var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
// var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk

// polly.makeSound(); // 'chirp', 'I'm a talking parrot!'
// fiji.makeSound(); // 'chirp'

// polly.color; // yellow
// polly.energy; // 100

// polly.isActive(); // Energy is decreasing, currently at: 80

// var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
// penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

// penguin.sound; // 'shriek'
// penguin.canFly; // false
// penguin.color; // 'black and white'
// penguin.energy; // 200
// penguin.isActive(); // Energy is decreasing, currently at: 180

// Let's build pet cat
var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow

// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

// let's build Tiger
var cuddles = new Tiger('Roar!');

cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!