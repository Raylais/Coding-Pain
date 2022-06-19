/**
 Your task is to write a function which returns the sum of following series upto nth term(parameter).
 */

 function SeriesSum(n)
{
    let series = 0;
    for (i = 0; i < n; i++) {
        series += 1 / (1 + i * 3)
    }
    return series.toFixed(2)
}

console.log(SeriesSum(1))
console.log(SeriesSum(3))
console.log(SeriesSum(2))
console.log(SeriesSum(5))
