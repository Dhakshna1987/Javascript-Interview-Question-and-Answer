
//Find the missing number in an array of size `n-1` containing numbers from 1 to `n`.


//example1: sum formula method

// function findMissingNumber(arr) {
//     const n = arr.length + 1;
    
//     //sum of numbers from 1 to n
//     const totalSum = (n * (n+1)) / 2; //15
    
//     //sum of number in array
//     const arraySum = arr.reduce((acc, num) => acc + num, 0); //12

//     return totalSum - arraySum; //15-12 = 3
// }

// console.log(findMissingNumber([1,2,4,5]));

//Example2: using set

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const numberSet = new Set(arr);
console.log(numberSet)
    for (let i=1; i <= n; i++) {
        if(!numberSet.has(i)) {
            return i;
        }
    }
}

console.log(findMissingNumber([1,3,4,5]))
