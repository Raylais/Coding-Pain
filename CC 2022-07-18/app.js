/**
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

 */

function countBy(x, n) {
    let z = [];

    for(i = 1; i <= n; i++) {
        z.push(i * x);
    }
    return z;
  }

//   console.log(countBy(2, 5));
//   console.log(countBy(1, 10));

/**
 Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

somehow 2 * 2 * 2 = 8...

 */
function rowSumOddNumbers(n) {
    return n * n * n;
}

/**
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
 */

function check(arry, checkValue) {
    return arry.includes(checkValue);
}

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));
console.log(check(['t', 'e', 's', 't'], 'e'))
