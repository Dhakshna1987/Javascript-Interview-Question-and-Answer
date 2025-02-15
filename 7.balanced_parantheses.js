
function isBalanced(str) {
    //create empty stack

    const stack = [];
    //Traverse each character in string
    for (const char of str) {
        if (char == '('){
            stack.push(char);
        } else if ( char == ')') {
            if(char.length == 0){
                return false
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
    
}


console.log(isBalanced("((((()))")); 