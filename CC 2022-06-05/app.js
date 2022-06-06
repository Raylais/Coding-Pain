/**
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
 */

function areYouPlayingBanjo(name) {
    let firstLetter = name.charAt(0)
    if(firstLetter.toLowerCase() == 'r') {
        return `${name} plays bajo`
    } else return `${name} does not play bajo`
}

console.log(areYouPlayingBanjo('robert'))
console.log(areYouPlayingBanjo('thomas'))
console.log(areYouPlayingBanjo('Robert'))