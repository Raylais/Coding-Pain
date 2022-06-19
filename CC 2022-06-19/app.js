/**
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
 */


// what the heck is a multiple again? 

function solution(number) {
    const multiple3 = 3;
    const multiple5 = 5;

    let sum = 0;
    //number -= 1;

    // for(i=number; i > 0; i--) {
    //     if (number < 0) {
    //         return sum = 0;
    //     }
    //     else if (number % multiple3 == 0 || number % multiple5 == 0) {
    //         sum += number;
    //         number--;
    //     }else number--;
    // }

    for(i = 1; i < number; i++) {
        if(i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return sum;
}


console.log(solution(10));
console.log(solution(6));
console.log(solution(5));
console.log(solution(25));
console.log(solution(-11));
