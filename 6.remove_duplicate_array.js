
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

// Not in build method

function removeDuplicates(arr) {
    // Initialize an empty array to store the unique elements.
    const uniqueArray = [];
  
    // Initialize an empty object (hash map) to keep track of elements that have already been seen.
    // The keys of this object will be the string representation of the array elements,
    // and the values can be anything (e.g., true) to indicate presence.
    const seen = {};
  
    // Loop through each element in the input array.
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
  
      // Convert the element to a string to use as a key in the 'seen' object.
      // This is important because object keys are always strings.
      // For primitive types, this works well. For objects, it will use "[object Object]".
      const elementAsString = String(element);
  
      // Check if the current element has NOT been seen before.
      // If seen[elementAsString] is undefined, it means this is the first time we're encountering it.
      if (seen[elementAsString] === undefined) {
        // If it's a new unique element, add it to our uniqueArray.
        uniqueArray[uniqueArray.length] = element; // Equivalent to uniqueArray.push(element);
  
        // Mark the element as seen in our 'seen' object.
        seen[elementAsString] = true;
      }
    }
  
    // Return the array containing only unique elements.
    return uniqueArray;
  }
 // --- Example Usage ---

// Example 1: Array of numbers
const numbersWithDuplicates = [1, 2, 3, 4, 2, 1, 5, 3, 6, 7, 7];
const uniqueNumbers = removeDuplicates(numbersWithDuplicates);
console.log("Original numbers:", numbersWithDuplicates);
console.log("Unique numbers:", uniqueNumbers); // Expected: [1, 2, 3, 4, 5, 6, 7]

// Example 2: Array of strings
const stringsWithDuplicates = ["apple", "banana", "orange", "apple", "grape", "banana"];
const uniqueStrings = removeDuplicates(stringsWithDuplicates);
console.log("\nOriginal strings:", stringsWithDuplicates);
console.log("Unique strings:", uniqueStrings); // Expected: ["apple", "banana", "orange", "grape"]

// Example 3: Array with mixed primitive types
const mixedWithDuplicates = [1, "hello", true, 1, "world", "hello", false];
const uniqueMixed = removeDuplicates(mixedWithDuplicates);
console.log("\nOriginal mixed:", mixedWithDuplicates);
console.log("Unique mixed:", uniqueMixed); // Expected: [1, "hello", true, "world", false]

// Example 4: Array with objects (demonstrates limitation: objects are treated as unique references)
const obj1 = { id: 1, name: "A" };
const obj2 = { id: 2, name: "B" };
const obj3 = { id: 1, name: "A" }; // Content is same as obj1, but different reference
const objectsWithDuplicates = [obj1, obj2, obj1, obj3];
const uniqueObjects = removeDuplicates(objectsWithDuplicates);
console.log("\nOriginal objects:", objectsWithDuplicates);
console.log("Unique objects:", uniqueObjects); // Expected: [obj1, obj2, obj3] (obj1 and obj3 are different references)
