/**
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

 */

function getCount(str) {
    const count = str.match(/[aeiou]/gi)
    return count ? count.length : 0;
}

console.log(getCount("aeiou"))
console.log(getCount("aeiouy"))
console.log(getCount("that is impossible to create"))
console.log(getCount("y"))