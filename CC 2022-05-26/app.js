/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */

//What are vowels again? - Basically they are letter representing a vowel sound such as 
// a, e, i, o, u (sometimes y but y is left out in this challenge)

//take in a string and iterate through each charOf(i), check for vowels if a vowel 
//Okay... found out about string.replace() and somehow about regexp, much easier?! way to run through a string and remove vowels

//take in a string and use replace method with a regexp to remove any vowels found within the str regardless of character case.
function disemvowel(str) {
    //return str.replace(/a|i|e|o|u/gi, '');
    //brackets do the same thing an dmake the code shorter...
    return str.replace(/[aeiou]/gi, '');
  }

  console.log(disemvowel('This website is for losers LOL!'))
  console.log(disemvowel('No offense but,\nYour writing is among the worst I\'ve ever read'))
  console.log(disemvowel('What are you, a communist?'))

  //JS will, JS will rock you!