

const obj = {
    name: 'John',
    age: 30,
    address: {
        city: "New York",
        zip: 15422
    },
    hobbies: ['reading', 'gaming'],
    greet: () => {
        console.log('Hello')
    }
};

const cloneObj = {...obj}; //shallow copy

cloneObj.age = 50;

obj.address.city = 'Los angels',
obj.hobbies.push('swimming'),

//shallow copy
console.log(obj.address.city); //Los angels
console.log(obj.hobbies); // [ 'reading', 'gaming', 'swimming' ]
console.log(obj.age)
console.log(cloneObj.address.city); //Los angels
console.log(cloneObj.hobbies); //[ 'reading', 'gaming', 'swimming' ]
console.log(cloneObj);
//Deep copy

