// DESCRIPTION
// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(someArr){
    let sum=0
    let isString
    for (let i=0; i<someArr.length; i++){
        sum = sum + Number(someArr[i])
    }
    return sum
}
let x = [1,'2',3,4,5]
console.log(sumMix(x))
