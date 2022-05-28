/*
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D (forever? :D)

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

/*
should I use conditional here  ? Test if bus has negative people(ghosts)?
Lets start with first accessing the 1st index's elements 0[10, 0] how can I 

two loops, one to iterate through the index a second one to iterate through the 2 dimensional array

Go through the busStops array at index 0 store

let peopleOnBus = 0;
peopleOnBus += (busStops[i][0] + busStops[i][1])

*/

var number = function(busStops) {
    let peopleOnBus = 0;
    for(i = 0; i < busStops.length; i++) {    
        peopleOnBus += (busStops[i][0] - busStops[i][1])
    }
    return peopleOnBus;
}

//test case
console.log(number([[10,0],[3,5],[5,8]]))
console.log(number(([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])))
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))

/*
Test how to access different elements within a single index [[10, 5], [2, 5]]
*/

// const array = [[10, 5], [2, 5]]
// console.log(array[0][1])
// console.log(array[1][0])