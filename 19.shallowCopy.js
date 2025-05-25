
// In JavaScript, shallow copy and deep copy are ways to duplicate objects or arrays. 
// The key difference is how they handle nested structures.

// Shallow Copy
// A shallow copy creates a new object, but it only copies references for nested objects/arrays instead of duplicating them. 
// Changes in the nested structures of the copied object will also reflect in the original object.



let obj = {
    name: "Thakshan",
    age:38,
    address:{
        address1: "43/a mummurthy nagar",
        address2: "chrompet",
        zipCode: 600044
    }
}


let newObj = Object.assign({},obj) 
// or {...obj}

newObj.address.zipCode = 600045
newObj.age = 40;
console.log(newObj.address.zipCode)
console.log(obj.address.zipCode)
console.log(newObj.age)
console.log(obj.age)