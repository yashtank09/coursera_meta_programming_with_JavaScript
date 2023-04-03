// map()
// This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

console.log(
    [0,10,20,30,40,50].map( function(num) {
        return num / 10;
    })
);

// Working with Maps
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
// Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

// get specific value
console.log(bestBoxers.get(1)); // 'The Champion'