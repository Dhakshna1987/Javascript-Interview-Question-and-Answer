//Find the two string is a anagrams?

//listen, silent
//rat, art

function areAnagrams(str1, str2) {

    //remove space and convert lowercase
    str1 = str1.replace(/\s+/g,'').toLowerCase();
    str2 = str2.replace(/\s+/g,'').toLowerCase();

    //check if the length are difference

    if(str1.length !== str2.length){
        return false;
    }

    //create character frequency maps

    const frequencyMap1 = {};
    const frequencyMap2 = {};

    for (const char of str1) {
        frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
    }   

    for (const char of str2) {
        frequencyMap2[char] = (frequencyMap2[char] || 0 ) + 1;
    }

    //compare to frequencyMap1 and frequencyMap2 character accept or not

    console.log(frequencyMap1);
    console.log(frequencyMap2)
    for (const char in frequencyMap1) {
        if(frequencyMap1[char] !== frequencyMap2[char]){
            return false
        }
    }
    return true;
}

console.log(areAnagrams('listen', 'silent'));
console.log(areAnagrams('hello', 'world'));