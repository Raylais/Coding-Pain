/**
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
 */

//Create a loop that takes the first number and count up adding each new number to the array until reaching the last number. 

function between(a, b) {
    arryNumbers = [];
    for(i = a; i <= b; i++) {
        arryNumbers.push(i);
    }
    return arryNumbers;
}

console.log(between(4, 10));