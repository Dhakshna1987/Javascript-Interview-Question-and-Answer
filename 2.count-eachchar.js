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

console.log(characterCounts);//{ g: 2, o: 3, l: 1, e: 2, ' ': 1, c: 1, h: 1, r: 1, m: 1 }

