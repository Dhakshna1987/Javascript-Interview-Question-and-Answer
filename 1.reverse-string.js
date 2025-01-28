// Reverse a string without using built in methods

let originalString = "hello"; //leng 5
                              //index =  5 -1


function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >=0; i-- ) {
        reversed += str[i];
    }

    return reversed;
}

let result = reverseString(originalString);
console.log(result);