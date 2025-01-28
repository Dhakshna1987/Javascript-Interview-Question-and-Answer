
//Write a function to perform binary addition of two strings.

function addBinary(a, b) {
    let carry = 0;
    let result = '';
    let maxLength = Math.max(a.length, b.length); 4

    a = a.padStart(maxLength,'0');
    b = b.padStart(maxLength,'0');
    // no padding 

    // Bitwise 

    for (let i = maxLength - 1; i >= 0; i--) {
        // a[0] = '1'  b[0] = '1' 
        // 1 + 1 + carry(0) = 2
        // sum = 2
       let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
      //    2/2 = 0 floor = 1
       carry = Math.floor(sum / 2 )
    //    sum % 2 = 1 
    // '111' + '0' = '0111';
        result = (sum % 2) + result;

        if (carry) {
            // '1' + '0111' = '10111'
            result = carry + result;
        }
        
    }

    return result;
}

console.log(addBinary('1010', '1101')); //10111

//Example2
function binaryAddition(a, b) {
    let result = ''; // To store the final binary result
    let carry = 0;   // To store the carry during addition
  
    // Start from the end of both strings
    let i = a.length - 1;
    let j = b.length - 1;
  
    while (i >= 0 || j >= 0 || carry) {
      // Get the binary digit from each string or 0 if out of bounds
      const bitA = i >= 0 ? parseInt(a[i], 10) : 0;
      const bitB = j >= 0 ? parseInt(b[j], 10) : 0;
  
      // Calculate the sum and carry
      const sum = bitA + bitB + carry;
      result = (sum % 2) + result; // Add the remainder to the result
      carry = Math.floor(sum / 2); // Update the carry
  
      i--; // Move to the next digit in string a
      j--; // Move to the next digit in string b
    }
  
    return result;
  }
  
  // Example usage
  const binary1 = '1010';
  const binary2 = '1101';
  console.log(binaryAddition(binary1, binary2)); // Output: '11000'
  