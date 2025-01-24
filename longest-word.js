//Longest word in the string


function findLongestWorld(sentence) {
    //split the sentence using space as delimeter
//    const  filterString = sentence.replace(/[^a-zA-Z ]/g, ''); // remove comma

    const  words = filterString.split(' '); // convert string to array
    let longestWord = '';

    for ( let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const sentence = "Search the world's information, including webpages, images, videos and more. ";

console.log(findLongestWorld(sentence));