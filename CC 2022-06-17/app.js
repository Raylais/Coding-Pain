/**
 Code as fast as you can! You need to double the integer and return it.
 */

 function doubleInteger(i) {
     return i + i;
 }

//  console.log(doubleInteger(44))
//  console.log(doubleInteger(11))
//  console.log(doubleInteger(23))
//  console.log(doubleInteger(676))
//  console.log(doubleInteger(250))

//SECOND CHALLENGE, FIRST ONE WAS TO EASY
/**
 The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

*Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

*Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example: 
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
 */

//Senior must be 55 or older && 7 or higher
//data[0][0] > 55 && data[0][1] > 7
function openOrSenior(data) {
    let output = [];
    for ( i = 0; i < data.length; i++ ) {
        // if ( data[i][0] >= 55 && data[i][1] > 7 ) {
        //     output.push("Senior")
        // } else output.push("Open");

        //Refactored using Ternary operator
        data[i][0] > 54 && data[i][1] > 7 ? output.push("Senior") : output.push("Open")
        //What the heck is destructing ? I kind of understand array.prototype.map()
    }
    return output;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]))