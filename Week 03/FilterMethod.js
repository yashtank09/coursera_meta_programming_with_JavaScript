// filter() 
// Another very useful method on the array is the filter() method. It filters your arrays based on a specific test. Those array items that pass the test are returned.

const nums = [0,10,20,30,40,50];

console.log(
    nums.filter( function(num) {
        return num > 20;
    })
); // [30,40,50]