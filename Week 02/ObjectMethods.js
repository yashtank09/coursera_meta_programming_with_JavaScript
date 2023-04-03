var car = {};
car.color = "red"; //update the value of a property of the car objject

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}
console.log(car);

/* 
First, I'll build a new object literally named car. I type var, space, car, space, equal sign, space, followed by a set of curly braces, and finally a semicolon.
Now, I'll extend the car object by assigning it a property named mileage. 
When I inspect the object, I can confirm that it contains a mileage property set to 98765. 
I want to add another property to the car object. This time, I will add a property named color and set it to the value of "red".
I can inspect the object again by typing its name into the browser console. So now, when I type console.log(car), I get an object with two properties: the mileage property, which is set to 98765, and the color property, set to "red". 
Great, now I've added two properties to my object.
Next, I want to add a method to my car object. And this method, when called, will output some text to the console. 
So, once again, I add another property to my car object. After all, a method is just another property of the car object. It's just another key-value par that the car object holds.
*/

var car2 = {};
car2.mileage = 98765;
car2.color = "red";
console.log(car2);
car2.turnTheKey = function() {
    console.log("The engine is running")
}
console.log(car2);


/* 
So, I begin by typing car dot turnTheKey, equals, and then I type the code for my function. So function, open-close parentheses. Then the two curly braces where I will place my code. Finally, inside the curly braces, I type the console dot log followed by the message "The engine is running".
Now I can inspect my car object again by typing its name into the console log method. This time, it displays that the car object contains three properties; the color property, the mileage property, and the turnTheKey property. 
Remember that all the key-value pairs in an object are referred to simply as properties. However, if I want to differentiate between the properties that can be executed, then I refer to such properties as methods. 
So, now I want to add another method to the car object. I'll name this one lightsOn. 
Once again, I type car.lightsOn, and then I add an equals sign, and again since it's a method, I'm assigning it to a function. This function will also have a console log in its body, and I'm just logging the string with the text "The lights are on". 
*/

car2.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car2);
car2.turnTheKey();
car2.lightsOn()