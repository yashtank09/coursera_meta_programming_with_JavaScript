// Exercise: Repetitive tasks with loops

/* 
    In this exercise, you will practice writing "for" and "while" loops.

Task 1
Write a "for" loop that will perform exactly the same repetitive code as this:
*/
for(var j=1; j<=5; j++){
    console.log(j)
}
console.log('Counting completed!\n')

// Task 2 
// Write a "for" loop that will perform exactly the same repetitive code as this:
for(var j=5; j>0; j--){
    console.log(j)
}
console.log('Countdown finished!\n')

// Task 3
// Write a "while" loop that will perform exactly the same repetitive code as this:
var j = 1;
while(j<6){
    console.log(j);
    j=j+1;
}
console.log('Counting completed!\n')
// Note: Name your increment variable i. Update the variable in the while loop using i++.

// Task 4
// Write a "while" loop that will perform exactly the same repetitive code as this:
var i = 5;
while(i>0){
    console.log(i);
    i=i-1;
}
console.log('Countdown finished!\n')

// Note: In the while loop, decrement the value of i using: i = i - 1.

// Task 5
// Write a "while" loop that will perform exactly the same repetitive code as this:
var year = 2018;
while(year<=2022){
    console.log(year)
    year++;
}
