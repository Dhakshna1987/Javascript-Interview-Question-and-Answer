//Two string merge but one by one

const str1 = "123";
const str2 = "456";

function mergeString(a,b) {
    let result = '';
    for(let i = 0; i < a.length; i++){
        result += a[i]+b[i];
    }
    return result;
}

console.log(mergeString(str1, str2));
