// Nested Loop

// single loop
for (var firstNum = 0; firstNum < 2; firstNum++) {
    console.log(firstNum);
}

//single loop
for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(secondNum);
}

// Now's the time to combine the first and the second loop:
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

// Now that I have a list of all the numbers that will be multiplied, having the actual result of this multiplication is as easy as updating the console.log() call:
//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}

// This makes for some very interesting combinations.
// For example, I can make a custom division table:
//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}