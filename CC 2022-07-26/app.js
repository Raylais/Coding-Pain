/** 8KYU Self Solved
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */

function boolToWord( bool ) {
    return bool ? 'Yes' : 'No'
}

/** 6KYU Not Self Solved
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

 */

var uniqueInOrder = function(iterable) {
    //Case sensitive a C and c next to eachother do not equal.
    //Hold value, if value same as next value, remove current value, retrieve next current value, repeat. 
    //when current value is not equal to previous, store current as previous and continue to next current value
    let arry = [];

    for ( i = 0; i < iterable.length; i++ ) {
        //compare value with the next value in the array or string, once the previous value no longer equals the next, it is the last same value nearby and gets pushed onto the new array
        if( iterable[i] != iterable[i+1] )
            arry.push(iterable[i]);
    }
    return arry;
}
//note: There was no need to store the value into a variable, only push and store on new array.

// console.log(uniqueInOrder('AAAABBBCCDAABBB'))


/** 8KYU Self Solved
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 */
//first we can check if the number is negative, if it is, return the number, if it is not...
//if number is not negative we can simply make it negative
function makeNegative(num) {
    // if (num < 0) {
    //     return num;
    // } else if (num > 0) {
    //     return -Math.abs(num)
    // } else return 0;

    return num <= 0 ? num : -num;
    // reduced coniditional down to one I think
}

// console.log(makeNegative(42));
// console.log(makeNegative(0));
// console.log(makeNegative(-42));


/** 8KYU Self Solved
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
 */
//checked on String methods and found this method repeat that does exactly what I need.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

//constructs and returns a new string containing the specified number of copies of the string on which is was called, all concatenated together.
function repeatStr (n, s) {
    return s.repeat(n);
}

// console.log(repeatStr(2, 'Hello'));

console.log([Math.PI, Math.E].toString())
console.log('0')

