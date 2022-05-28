/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.*/

function sum(numbers) {
    let sumNum = 0;
    for(i = 0; i < numbers.length; i++) {
        sumNum += numbers[i];
    }
    return sumNum;
}

let array1 = [1, 5.2, 4, 0, -1]

console.log(sum(array1))
console.log(sum([1, 5.2, 4, 0, -1]))