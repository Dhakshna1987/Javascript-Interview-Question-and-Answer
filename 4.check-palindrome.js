//Check if a string is a palindrome

//madam
//radar
//level

function isPalindrome(str) {
    function reverseString(name){
        let reversed = "";
        for( let i = str.length-1; i >=0; i--){
            reversed += str[i];
        }

        return reversed;
    }
    const cleanedStr = str.toLowerCase();
    return cleanedStr === reverseString(cleanedStr);
}

console.log(isPalindrome("level")); //true
console.log(isPalindrome("tree")); //false
    
    console.log(checPalindrome("madam")); //true