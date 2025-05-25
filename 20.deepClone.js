// Deep Copy
// A deep copy creates a completely independent duplicate, including all nested objects. 
// Changes in the copied object won't affect the original.

    let obj1 = {
        name: "John",
        details: {
        age: 25,
        city: "New York"
        }
    };

    let deepCopy = structuredClone(obj1);
    // or
    // let deepCopy = JSON.parse(JSON.stringify(obj1));

    deepCopy.details.age = 30;

    console.log(obj1.details.age);
    console.log(deepCopy.details.age);

