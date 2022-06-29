/**
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
 */

//I forgot about the push method... push the result onto array and push the next one onto it moving them right. reversing the array works to though... 
function powersOfTwo(n) {
    let powTwo = [];
    // const static = n;
    for(i = 0; i <= n; i++) {
        // powTwo[i] = Math.pow(2, n);
        // n--;
        powTwo.push(Math.pow(2, i));
    }
    //return powTwo.reverse();
    return powTwo;
}


console.log(powersOfTwo(2))
console.log(powersOfTwo(4))
console.log(powersOfTwo(125))