
// In given string only unique value return only
const originalStr = "aeroplane";

function filterStr(value){
    let str = ""
    for (let key in value){
        if(value[key] <2){
            str += [key]        
        }
    }
    return str;
}

function uniqueValue(str){
    let newStr = { };
    for(let char of str){
        if(newStr[char]){
            newStr[char] += 1
        }else{
            newStr[char] = 1
        }
    }
    return filterStr(newStr);
}

console.log(uniqueValue(originalStr))