/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false 

My Own Example:
Input: s = "({})" 
Output: true??

*/ 

// Work on solving recursively!

var isValid = function(s) {
    const checkObject = {"(":")", "[":"]", "{":"}"};
    const checkKeys = Object.keys(checkObject);
    var text = "";
    var output = "";
    // check over the legnth of a string
    var l = s.length;
    // console.log('length: ', l);
    for (let i = 0; i < l; i++) {
        // console.log("Start(i): ", i);
        // Consume text, check if open bracket
        if (checkKeys.includes(s[i])) { // If vlaue is an opening bracket
            text += s[i];
            console.log (`Opening:`,text);
        } else { // If closing bracket
            console.log('Checking:',s[i], '&', );
            if (i == 0) {
                return false
            } else if (s[i] == checkObject[s[i-1]]) { // Check if closing matches most recent opening
                console.log('Match of: ', s[i-1], '& ', s[i])
                text = text.slice(0, -1);
                console.log('Remaining: ', text, 'length: ', text.length, 'i:', i);
            } else { // If closing brackets don't match
                console.log('No Match');
                return false
            }
        }
    }
    return true
    // each time there is an instance of a (, [, {
        // Check for the corresponding closing bracket
    // Failure states
        // If there is a closing of a different type
        // If there is different closing 
};

console.log(isValid("{[]}"));