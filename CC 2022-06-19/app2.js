/**
 Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 */

 function digitize(n) {

   return n.toString().split("").map(Number).reverse();

 }

 console.log(digitize(348597))
 console.log(digitize(123456))
 console.log(digitize(654321))
 console.log(digitize(807090))
 console.log(digitize(100400))