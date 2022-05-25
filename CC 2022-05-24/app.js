/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */
// Finds the remaineder of the given number, anything without a remainder (0) is even and anything with one is odd
function even_or_odd(number) {
    return number % 2 == 0 ? 'Even' : 'Odd';
  }

  console.log(even_or_odd(5))
  console.log(even_or_odd(84))
  console.log(even_or_odd(7))
  console.log(even_or_odd(0))