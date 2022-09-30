/**
Write a function that checks if a given string (case insensitive) is a palindrome.

What is a palindrome?

A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar. 

Examples Madam - M-A-D-A-M OR Racecar - R-A-C-E-C-A-R

How do we find out if a word is a palindrome? 
Are we accounting for numbers? or just words ? Answer: No idea but the test cases only include words so we will leave out numbers.

From test cases we should include words and sequence of letters such as:
"hello"(false), "aba"(true), "a"(true) etc...


How to solve ? : Maybe create two arrays, split the string, then create a copy of array, reverse it and compare the strings, if the letters array indexes match then we have a palindrome. 

must account for case, we can take the incoming string and convert to lowercase using method toLowerCase. Then we can store it in a string, reverse it, join it back into a string and compare it to x. 

 */


function isPalindrome(x) {
    // your code here
    x = x.toLowerCase();
    let palindrome = x.split('').reverse().join('');

    return palindrome == x;
  }

  console.log(isPalindrome('Abba'))