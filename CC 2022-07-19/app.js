/**
Description:

Make a simple function called greet that returns the most-famous "hello world!".
Style Points

Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

 */
function greet() {
    return "hello world!";
    }



/**
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
 */

function DNAStrand(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    // loop through string, enter each element value into specific case
    // return new string
    let newStrand = '';
    for(i = 0; i < dna.length; i++) {
        switch(dna[i]) {
            
            case 'A' :
                newStrand += 'T';
                break;
            
            case 'T' :
                newStrand += 'A'
                break;

            case 'C' :
                newStrand += 'G'
                break;

            case 'G' :
                newStrand += 'C'
                break;
        }
    }
    return newStrand;
  }



/**
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

 */
// We can loop through the array and check each element's value to for positive int
// if positive add to sum, if not do nothing and move to next element
// initial check to see if array has anything inside, if not return 0.
function positiveSum(arr) {
    let sum = 0; 
    for( i = 0; i < arr.length; i++ ) {
        if(arr.length < 0){
            return 0;
        } else if(arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(positiveSum([1, 2, 3, 4, 5]))