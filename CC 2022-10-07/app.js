/**
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
 */

/**
 Take in the array of numbers to start
twoSum({5,4, 1, 2}) as an example
target number will be let target = 9
the answer would be either [0, 1] or [1, 0]

Should we just add the numbers going through the indices until we get a match ? But what if the pair whose sum equals target are not side by side say 0, 5, this solution wouldn't get that answer.
What if we take each index say 0 then get the sum of each index in the array and do that for each index. 
example: 0 + 1, 0 + 2, 0 + 3 THEN 1 + 2, 1 + 3 THEN 2 + 3 THEN 3 + has already been evaulated against all indices. 
For each sum we compare to the target to see if we have a match, if we do return those indices for the first match.

*another idea, what if we take the target and get the difference and do an array search for that number. if we find that number that pair is our tuple. if the number is not found, it is not, if the number is negative it is not. 

seems good, now how to code this?

Numbers should come as an array input, target a single value
take array and use some method to get the sum of indices in a way described above. 

find the difference between the target and the first index number.

if target is 0 then search arrays for two entries of 0 and that will be our tuple.
if difference is negative repeat first step with next index

if difference is positive, search array for number
if not found then return to step 1 and repeat
if found then this is the tuple. 


 */

 function twoSum(numbers, target) {
    let difference = target - numbers[0];
    tuple = [];
    let index = 0;
    //kinda sorta working so far, need to find a way to get the 2nd index. indexOf method only gets the first... maybe I can use indexLast to go in reverse to get the second? this works! looks looks like a lot of operations... cannot think of a different solution currently. Check for 0 + 0 = 0 completed...(do I even need this check?). 
    
    //**Next to work on negative check then the main check**

    //for (i = 0; i < numbers.length; i++) {
        if(target == 0) {
            index = numbers.indexOf(0);
            tuple.push(index);
            index = numbers.lastIndexOf(0);
            tuple.push(index);
            return tuple;
        } return "no tuples"

    //    }
    //}
  }

  console.log(twoSum([5, 4, 0, 1, 0], 0))