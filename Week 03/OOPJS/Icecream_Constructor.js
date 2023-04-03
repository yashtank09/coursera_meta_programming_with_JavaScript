function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    };
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
console.log(kiwiIcecream) // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
console.log(appleIcecream) // --> Icecream {flavor: 'apple', meltIt: ƒ}

// Using class constructoor
/* class Icecream {
    constructor(flavor) {
        this.flavor = flavor;
        this.meltIt = function() {
            console.log(`The ${this.flavor} icecream has melted`);
        }
    }
}

let kiwiIcecream = new Icecream("Kiwi");
kiwiIcecream.meltIt() */