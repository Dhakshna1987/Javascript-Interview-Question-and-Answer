
// 1. Using Dot Notation (object.property)

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  console.log(person.name); // Output: John
  console.log(person.age);  // Output: 30
  
//   2.Accessing Nested Object
const user = {
    id: 1,
    profile: {
      username: "johndoe",
      email: "john@example.com"
    }
  };
  
  console.log(user.profile.username); // Output: johndoe
  console.log(user["profile"]["email"]); // Output: john@example.com

  // 3.Using Optional Chaining (?.)

console.log(user.profile?.username); // Output: johndoe
console.log(user.address?.street); // Output: undefined (no error)

// 4.Basic Function to Retrieve Data


const person = {
    name: "Alice",
    age: 25,
    city: "London"
  };
  
  function getProperty(obj, key) {
    return obj[key]; // Using bracket notation to access dynamic keys
  }
  
  console.log(getProperty(person, "name")); // Output: Alice
  console.log(getProperty(person, "age"));  // Output: 25


//   5.Retrieving Data from Nested Objects

  const user = {
    id: 101,
    profile: {
      username: "john_doe",
      email: "john@example.com"
    }
  };
  
  function getNestedProperty(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  }
  
  console.log(getNestedProperty(user, "profile.username")); // Output: john_doe
  console.log(getNestedProperty(user, "profile.email"));    // Output: john@example.com
  console.log(getNestedProperty(user, "profile.phone"));    // Output: undefined
  
  