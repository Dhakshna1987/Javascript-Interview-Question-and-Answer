
//Example1: new Set

// function removeDuplicate(arr) {
//     return [...new Set(arr)]
// }


// const arrayItem = [1,2,3,3,4,5,5,6,7,8,8,8];

// console.log(removeDuplicate(arrayItem));


//Example2: filter
// function removeDuplicate(arr) {
//     return arr.filter((value, index, self) => self.indexOf(value) == index );
// }

// const arrayItem = [1,2,3,3,4,5,5,6,7,8,8,8];

// console.log(removeDuplicate(arrayItem));

//Example3: reduce

function removeDuplicate(arr) {
    return arr.reduce((unique, item) => {
        return unique.includes(item) ? unique : [...unique, item]
    }, [])
}

const arrayItem = [1,2,3,3,4,5,5,6,7,8,8,8];

console.log(removeDuplicate(arrayItem));