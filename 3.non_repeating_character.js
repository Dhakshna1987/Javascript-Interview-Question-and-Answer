//Find the first non-repeating character in a string.



function firstNonRepeatingCharacter(str) {
    const frequencyMap = {};

    //Build frequency Map

    for (const char of str) {
        if (frequencyMap[char]){
            frequencyMap[char] += 1;
        }else {
            frequencyMap[char] = 1;  
        }
    }

    console.log(frequencyMap)
    
    for (const char of str) {
        if(frequencyMap[char] == 1) {
            return char;
        }
    }

    
    return null;
}

console.log(firstNonRepeatingCharacter('swiss'))