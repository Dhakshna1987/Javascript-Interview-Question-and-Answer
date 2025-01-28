
//Convert a Roman numeral to an integer.


const roadMap = [
    { value: 1000, symbol: 'M'},
    { value: 900, symbol: 'CM'},
    { value: 500, symbol: 'D'},
    { value: 400, symbol: 'CD'},
    { value: 100, symbol: 'C'},
    { value: 90, symbol: 'XC'},
    { value: 50, symbol: 'L'},
    { value: 40, symbol: 'XL'},
    { value: 10, symbol: 'X'},
    { value: 9, symbol: 'IX'},
    { value: 5, symbol: 'V'},
    { value: 4, symbol: 'IV'},
    { value: 1, symbol: 'I'},
]

function intToRoman(num){
    
    let roman = '';
 for (let index = 0; index < roadMap.length; index++) {
      const {value, symbol} = roadMap[index];
    //while the current value can fit into num, appends its roman symbol
      while (num >= value) {
        roman += symbol;
        num -= value;
      }    
 }
 return roman;
}

console.log(intToRoman(2)); //II;
console.log(intToRoman(12)); //XII
console.log(intToRoman(53));//LIII