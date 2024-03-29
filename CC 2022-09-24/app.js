/**
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
 */

//Track number of days in rental. Track total cost, add 40 for every day, create a range statement for 3-6 days in rental subtract 20 dollars off total. For 7 days to infinity subtract 50 from total.
//

function rentalCarCost(d) {
    totalCost = 40;

    for (i = 1; i < d; i++) {
        totalCost += 40;
    }
    if (d >= 3 && d <= 6) {
        totalCost -= 20;
    } else if (d >= 7) {totalCost -= 50;}

    return totalCost;
}

console.log(rentalCarCost(7));