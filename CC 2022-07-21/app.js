/**
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
 */

function opposite(number) {
    // if(number == 0){
    //     return 0;
    // } else if (Math.sign(number) == 1) {
    //     return -number;
    // } else if (Math.sign(number) == -1) {
    //     return Math.abs(number);
    // }

    //Not my solution but oh wow, it never occurred to me to just reverse the number given
    //this ouputs a -0 but in java per some comments 0 == -0 so this is acceptable
    //NAN is not an input that needs to be worried about in the context of this question
    return (-number);
}

// console.log(opposite(0))
// console.log(opposite(-1.45))
// console.log(opposite(1.56))

//******************************************************************************** */

/**
Write a function which converts the input string to uppercase.
 */

function makeUpperCase(str) {
    return str.toUpperCase();
}
//Simple solution so I attempted a refactor into use an arrowfunction.
let upperCase = (str) => str.toUpperCase();


// console.log(makeUpperCase('hello'));
// console.log(upperCase('world'));

//******************************************************************************** */

/**
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

 */

// Valid smiley face examples: :) :D ;-D :~) - 
//each face needs eyes first, 2nd is OPITIONAL nose and last needs a mouth
//since there are a small finite set of possible faces we could use a switch
function countSmileys(arr){
    let smileCount = 0;
    for(i=0; i < arr.length; i++) {
        //:) :-) :~), :D :-D :~D, ;) ;-) ;~), ;D ;-D ;~D
        switch (arr[i]) {
            case ':)' :
                smileCount++;
                break;

            case ':-)' :
                smileCount++;
                break;
            
            case ':~)' :
                smileCount++;
                break;

            case ':D' :
                smileCount++;
                break;

            case ':-D' :
                smileCount++;
                break;

            case ':~D' :
                smileCount++;
                break;

            case ';)' :
                smileCount++;
                break;

            case ';-)' :
                smileCount++;
                break;

            case ';~)' :
                smileCount++;
                break;

            case ';D' :
                smileCount++;
                break;

            case ';-D' :
                smileCount++;
                break;

            case ';~D' :
                smileCount++;
                break;
        }
    }
    return smileCount;
}

console.log(countSmileys([]))
console.log(countSmileys([':D',':~)',';~D',':)']))