
//Find the longest common prefix of an array of strings.


//flower flow flight -- common prefix is "fl"

//interspecties intersterllar interstate -- common prefix "inters"


function longestCommonPrefix(strArray) {
    if(strArray.length === 0) return "";

    let prefix = strArray[0];
    console.log(prefix)
    for (let i = 0; i < strArray.length; i++) {

        while (strArray[i].indexOf(prefix) !==0){
            prefix = prefix.substring(0, prefix.length-1);

            if (prefix === "") return ""; //no common prefix
        }
    }
    
    return prefix;
}


console.log(longestCommonPrefix(['flower', 'flow', "flight"])); //fl
console.log(longestCommonPrefix(['interspecties', 'intersterllar' ,'interstate'])); //inters
