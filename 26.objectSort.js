let obj = {
    h: 2,
    a: 1,
    b: 3,
    i: 4
  };
  
  // key sort in object
  let sortedObj = Object.keys(obj)            // Step 1: Get all keys
    .sort()                                   // Step 2: Sort keys alphabetically
    .reduce((acc, key) => {                   // Step 3: Rebuild the object in order
      acc[key] = obj[key];
      return acc;
    }, {});
  
  console.log(sortedObj); //{ a: 1, b: 3, h: 2, i: 4 }
  


// value sort in object
let sortedByValue = Object.entries(obj)
  .sort((a, b) => a[1] - b[1]) // sort by values
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  console.log(sortedByValue) // { a: 1, h: 2, b: 3, i: 4 }