const originalArray = [1,2,3,2,4,1,5,6,3,2,1];

function countValue(arr){
    let countChar = {};
    arr.forEach((item) => {
        countChar[item] =(countChar[item] || 0 ) + 1
    });
    return countChar;
}

console.log(countValue(originalArray));//{ '1': 3, '2': 3, '3': 2, '4': 1, '5': 1, '6': 1 }