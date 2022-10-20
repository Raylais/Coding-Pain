/**

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

 */

function isIsogram(str){
    str = str.toLowerCase();
    arry = str.split('').sort();

     for(i = 0; i < arry.length; i++)
        for(j = 1; j < arry.length; j++)
            if( arry[i] === arry[j] ) {
                return false}
            return true;
}
    console.log(isIsogram("WorD"))
    console.log(isIsogram("moOse"))
    console.log(isIsogram("isogram"))
    console.log(isIsogram("isIsogram"))
    console.log(isIsogram("Dermatoglyphics"))