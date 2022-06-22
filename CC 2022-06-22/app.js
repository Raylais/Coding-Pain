/**
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

 */

//I am taking in a string of a word that has numbers mixed in, the numbers are of type string
//I need to go through the string and find numbers that should have been letters 0, 1, & 5 and convert them to the appropriate letters
// 5 = S
// 1 = I
// 0 = O
// All strings taken in are capitalized

function correct(string) {
    string = string.split('')
    for ( i = 0; i < string.length; i++ ) {
        if (string[i] === '0') {
            string[i] = 'O';
        }
        else if (string[i] === '1') {
            string[i] = 'I'
        }
        else if (string[i] === '5') {
            string[i] = 'S'
        }
    }
    return string.join('');
}