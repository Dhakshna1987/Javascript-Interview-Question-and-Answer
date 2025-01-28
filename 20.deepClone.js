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


function deepClone(obj) {

    if(obj === null || typeof obj !== 'object'){
        return obj;
    }

    //handle array case

    if ( Array.isArray(obj)){
        const arrCopy = [];

        for (let i=0; i<obj.length; i++){
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    //handle Object case

  const objCopy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        objCopy[key] = deepClone(obj[key]);        
    }
  }
  return objCopy;
}

const cloneObj = deepClone(obj);

obj.address.city = "Los Angeles";
obj.hobbies.push("Swimming");

console.log(obj.address.city); //Los Angeles
console.log(cloneObj.address.city); //New York

console.log(obj.hobbies); //[ 'reading', 'gaming', 'Swimming' ]
console.log(cloneObj.hobbies) //[ 'reading', 'gaming' ]



