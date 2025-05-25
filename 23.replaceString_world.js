
// Find all string replacement that matches with the subset of the words

function replaceString(str1,str2) {
    const pattern = new RegExp('\\b('+ Object.keys(str2).join("|") + ')\\b','gi');
        console.log(pattern);
        return str1.replace(pattern, match => str2[match.toLowerCase()] || match );
    }
    
    const str1 = "Alice and Bob went to the park. Charlie met them there";
    const str2 = {
        'alice': "Evening",
        'bob': "John",
        'Charlie':"David"
    };
    
    console.log(replaceString(str1,str2));
    
        
    