/* #1 Write a function called printPositives that takes an array and uses the forEach method to print 
only the positive numbers.
//var numbers = [{num : 1}, {num : -1}, {num : -3}, {num : 2}, {num : 3}, ];
var numbers = [1, 2, -1, -3, 2, -3, 5];

function printPositives (num) {
        if (num > 0 ){
            console.log(num);
        }
        else{}
}

numbers.forEach(printPositives);*/

function printPositives (array) {
    array.forEach (function(item) { 
        if (item > 0) { 
            console.log(item);
        }     
    }) 
}  
printPositives([1, -2, 3, -4, 5, -6, 7, 8]);

/* #2 Similar to the previous exercise, write a function called getPositives that takes an array 
and uses the filter method to return a new array with only the positive numbers.*/

function getPositives2 (array){
    return array.filter (function (num){
        return num > 0 ;
    })
}
console.log(getPositives2([1, -2, 3, -4, 5, -6, 7, 8]));
