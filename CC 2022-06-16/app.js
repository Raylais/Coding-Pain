/**
 The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task: 
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples: 
* Input: [1,2,3,4,5], output= [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]

 */

// lets break it down, let us first take in an array and find the smallest value of the array. 
// Using Math Methods we can find the lowest value of the array
// We can use this to remove the lowest value

// Now to solve for if there are duplicate lowest values
// Remove lowest value with the lowest index value, how can I compare index values?


function removeSmallest(numbers) {

    //use math.min(...numbers) gets the first lowest value of the array
    //splice() allows me to change or remove part of the array and the rest of the array will move over to fill in the space left behind
    //then return modified array.
    const min = Math.min(...numbers);
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
  }

  console.log(removeSmallest([3, 2, 3, 2]))