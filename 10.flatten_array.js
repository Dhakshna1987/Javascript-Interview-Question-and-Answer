

const nestedArray = [1,[2,[3,4],5],6,[7,[8,9]]];
//output [,1,2,3,4,5,6,7,8,9];

function flatternArray(arr) {
    let flatArr = [];

    arr.forEach(item => {
        if(Array.isArray(item)){
            flatArr = flatArr.concat(flatternArray(item))
        }else {
            flatArr.push(item)
        }
    });
    return flatArr;
}

console.log(flatternArray(nestedArray))




