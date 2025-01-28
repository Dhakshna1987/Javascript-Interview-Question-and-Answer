
//Write a function to find the intersection of two arrays.



function intersection(arr1, arr2) {
    const set1 = new Set(arr1);

    const result = arr2.filter((item) => set1.has(item));
    console.log(result)
    return [...new Set(result)];
}


console.log(intersection([1,2,2,3], [2,2]));
console.log(intersection([4,9,4,5], [9,4,6,7,7]));

