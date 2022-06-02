/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
    // let powNum = 0;
    // for(i = 0; i < numbers.length; i++) {
    //     powNum += (numbers[i] * numbers[i]);
    //     powNum = powNum + (Math.pow(numbers[i], 2))
    // }
    // return powNum
    
    //refactoring using array.reduce() method and arrow function
    return numbers.reduce((preVal, curVal) => preVal + curVal * curVal, 0)
}

const numArray  = [2, 2]        // 8
const numArray2 = [5, 5]        // 50
const numArray3 = [10, 10]      // 200
const numArray4 = [2, 2, 2, 4]  // 20
const numArray5 = [100, 0, 50]  // 12500

console.log(squareSum(numArray))
console.log(squareSum(numArray2))
console.log(squareSum(numArray3))
console.log(squareSum(numArray4))
console.log(squareSum(numArray5))