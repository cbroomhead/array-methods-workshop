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


/* #5 Exercise 5
Write a function called `countVowels` that takes a string and returns the number of vowels in the string. You should 
use `Array.prototype.reduce` to do your work.
**Hint**: You can use `String.prototype.split` again. There is a way to use it to split a string by character. Try to Google it :)
**Hint 2**: You can create an array of vowels and use `Array.prototype.indexOf` to check if the current letter is a vowel.*/

function countVowels (strg){
var arrString = strg.split("");
    var vowels = ["a", "e", "i", "o","u","y"];

    return arrString.reduce(function (a, b){
        if (vowels.indexOf(b) > -1){
            a += 1;
        }
        return a;
    }, 0);
};

console.log(countVowels("i am in Montreal"));

var str = "Hello World!";
var res = str.toLowerCase();

/* #6 ## Exercise 6
Write a function called `highLow` that takes an array of numbers, and returns an object with a property `highest` 
containing the highest number, and a property `lowest` containing the lowest number, using `Array.prototype.reduce`.
For example, starting with `[1, -10, 20, 40, 5]`, your function should return `{highest: 40, lowest: -10}`.
**Hint**: Javascript has a special value called `Infinity`, which is higher than any other number. See if you can 
initialize your reduce accumulator with `Infinity` and `-Infinity` :)
console.log(Infinity         ); /* Infinity   
console.log(Infinity + 1     ); /* Infinity   
console.log(Math.pow(10,1000)); /* Infinity  
console.log(Math.log(0)      ); /* -Infinity  
console.log(1 / Infinity     ); /* 0
*/

function highLow (array) {
    var arr = array;
    //reduce to find highest
    return arr.reduce(function (obj, ele){
        if (obj.highest < ele ){
           obj.highest =  ele;
        }
        if(obj.lowest > ele){
           obj.lowest = ele;
        } 
        return obj;
    }, {highest: -Infinity, lowest: Infinity});
};
console.log(highLow([1, 2, -666, 666, 31, -2]))

/*## Exercise 7
Expanding on exercise 6, write a function called `highLowTwo` that takes an array of numbers, and 
returns the higest, second highest, lowest, and second lowest numbers.
For example, starting with `[1, -10, 20, 40, 5]`, your function should return:
```json
{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}
```*/

function highLowTwo (array){
    var arr = array;
    //reduce to find highest
    return arr.reduce(function (a, b){
        if (a.highest < b ){
           a.secHighest = a.highest;
           a.highest =  b;
           
        }
        if(a.lowest > b){
           a.secLowest = a.lowest;
           a.lowest = b;
           
        } 
        if(b < a.highest && b > a.secHighest){
            a.secHighest = b;
            
        }
        if(b > a.lowest && b < a.secLowest){
            a.secLowest = b;
            
        }
        return a;
    }, {highest: -Infinity, secHighest: -Infinity, lowest: Infinity, secLowest: Infinity});
};
console.log(highLowTwo([1, -10, 20, 40, 5]))

