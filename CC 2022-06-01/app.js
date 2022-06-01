/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
 */

//given a list (array) of numbers, add all numbers up then divide by the total number of given numbers to get the average, an empty array will return 0

function find_average(array) {
  let average = 0;
  if(array.length > 0) {
    for(i = 0; i < array.length; i++) {
      average += array[i]
    }  
  } else { return 0 }
  return average / array.length;
}

let aveArray = [80, 61, 14, 82, 65, 27, 52, 21, 63, 33, 55, 32, 66, 38]

//console.log(find_average([1,1,1]))
//console.log(find_average([1,2,3,4]))
//console.log(find_average(aveArray))


/* Alternate solution */

//Ternary operator evaluates weather the array is empty or not
//using array method reduce to iterate and add all values in array begining at default index 0
function find_aveALT(array1) {
  //return array1.length === 0 ? 0 : array1.reduce((acc, ind)=> acc + ind, 0)/array1.length
  /* refactored solution for comprehension */
  return !array1.length ? 0 : array1.reduce((prevVal, currVal) => prevVal + currVal, 0) / array1.length
}

console.log(find_aveALT([1, 1, 1]))
console.log(find_aveALT(aveArray))