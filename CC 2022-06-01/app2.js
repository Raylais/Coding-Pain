/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
** Or weather a part of the string is even a word
 */

//I could take in the string of words as arrays and find the shortest word and return the length


//Using split(' ') to break up passed in strings into array of words sperated by ' ' blank spaces
//Then create and set the first index value length into currStr
//Loop through, skip index[0] as this word is initialized in currStr, compare the rest of the string lengths and replace any elements whose length is less than currStr.
function findShorts(str) {
    
    const arryStr = str.split(' ')
    let currStr = arryStr[0].length
    for(i = 1; i < arryStr.length; i++) {
        if(currStr > arryStr[i].length) {currStr = arryStr[i].length}
        }
        return currStr
    }


const words = "Blaaaaaaaaaaaaaaaaaaaaaaaah"
const words1 = "In the pursuit of knowledge"
const words2 = "Which word do you think is the shortest here? is a considered a world aa"
console.log(findShorts(words))
console.log(findShorts(words1))
console.log(findShorts(words2))