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

/* #2B Re-do exercise 1 by first filtering the input array, and then printing the numbers from the 
filtered array. Your code will look something like: `return arr.filter(…).forEach(…) */
function printPositives3 (array) {
    return array.filter (function (num){
        return num > 0;
    }).forEach (function(num) { 
        console.log(num);
    });
}  
printPositives3([1, -2, 3, -4, 5, -6, 7, 8]);

/*#3 Exercise 3
Write a function called `filterArray` that takes an array AND a function as arguments. Your `filter` function should return 
a new array that contains only the elements where the passed function returns a truthy value.*/

function filterArray (arr, func){
    return arr.filter(func);
}

function isPos (number){
    return (number > 0);
};

console.log(filterArray([1,2,-3,-3,8], isPos));

/*#4 Write a function called longestWord that takes a string as argument, and returns the longest word in the string. 
You should use Array.prototype.reduce to do your work.
Hint: You can use String.prototype.split to split the string into an array of words.*/

function longestWord (strg){
    var arrString = strg.split(" ");
    return arrString.reduce(function(a, b){
        if (b.length > a.length){
            return b;
        }
        else {
            return a;
        }
}, "");
}
console.log(longestWord("I am in Montreal"));

