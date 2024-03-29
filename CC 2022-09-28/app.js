/**
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
 */

/**
First lets understand or write a formula for this problem

Only accured interest is taxed so. (1000 * .05) * (.18) + P

So we will probably want a check at the start to see if the desired principle has been met.

if principle == desired -> return years if not continue some kind of loop maybe. 

while loop? while princple != desired run this loop. do we need a loop ? 

desired = 1100 
principle = 1000
I = .05
T = .18

aI = principle * I
principle = principle + 50 - (50 * .18)

while (principle > desired) {
    accuredInterest = principle * interest
    principle += accuredInterest - (accuredInterest * tax)
}

 */

function calculateYears(principal, interest, tax, desired) {
    // your code
    year = 0;
    while (principal < desired) {
        aInterest = principal * interest
        principal += aInterest - (aInterest * tax)
        year++;
    }
    return year;
}

console.log(calculateYears(1000, .05, .18, 1100))
console.log(calculateYears(1000,0.01625,0.18,1200))
console.log(calculateYears(1000,0.05,0.18,1000))