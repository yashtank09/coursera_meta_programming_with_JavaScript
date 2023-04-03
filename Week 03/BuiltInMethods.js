// non-iterable object

/*const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) { // TypeError: car is not iterable
    console.log(prop)
}*/


// Iterable object
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

// Built-in Methods

/* 
The Object.keys() method
The Object.keys() method receives an object as its parameter. Remember, this object is the object you want to loop over. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the Object.keys() method.

Here's an example of running the Object.keys() method on a brand new car2 object:
*/
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// So, when I run Object.keys() and pass it my car2 object, the returned value is an array of strings, where each string is a property key of the properties contained in my car2 object.

/* 
The Object.values() method
Another useful method is Object.values():
*/
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']


/* 
The Object.entries() method
Finally, there's another useful method, Object.entries(), which returns an array listing both the keys and the values. 
*/
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));


// You now have all the ingredients that you need to loop over any object's own property keys and values.
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])// key -{gets keys of object cloathingItem} , cloathingItem[key] gives values based on keys 
}

// how to access an object's member using the brackets notation. 

// dynamically access either one of those properties on a brand new drone object, using the brackets notation.
function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();