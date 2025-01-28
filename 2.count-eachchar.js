//Count the occurances of each character in a string.


function countCharacterOccurance(str) {
    const counts = {};

    for ( let char of str) {
                
        if ( counts[char]) {
             counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

const inputString = "google chrome";
const characterCounts = countCharacterOccurance(inputString);

console.log(characterCounts);

