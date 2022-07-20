/**
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

function even_or_odd(number) {
  return number % 2 ? 'Odd' : 'Even';
}

// console.log(even_or_odd(2))
// console.log(even_or_odd(1))

/**
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

 */

function sumStrings(a, b) {
    let numString = 0;
    if(a === '')
    {numString = 0 + parseInt(b) }
    else numString = parseInt(a) + parseInt(b);
    return numString.toString();
}

// console.log(sumStrings('123', '456'));
// console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
//712577413488402631964821329
//7.125774134884027e+26

console.log([1,2.72,4,3.14,9].toString() === "[1,2.72,4,3.14,9]")
console.log([3.14].toString())