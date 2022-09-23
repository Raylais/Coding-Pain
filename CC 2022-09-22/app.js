/**
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
 */

/**
find out if the given number n can be divided by any number between 1 through n and not have a remainder, if it does not have a remained that number is a divisor.

Step 1: divide n by 1, any number can be divided 1 times so 1 is automatically in. divide by 2
Step 2: 2 % n == 0

Probably need to loop through the numbers upto n. 

we divide n by i, if the result is 0 then i is a divisor and we store it and output later. if it is not 0 it is not a divisor and we do not store it. 
*/

function getDivisorsCnt(n){
    divisors = 0;
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisors++;
        }
    }
    return divisors;
}

console.log(getDivisorsCnt(30));