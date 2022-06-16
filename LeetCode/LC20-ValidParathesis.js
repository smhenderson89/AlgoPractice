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



var isValid = function(s) {
    // Check over length of the string
    // If see a open string, beginning saving index to variable
        // Check next index
            // If text is opening, add to open string variable and repeat consuming string
            // If text is closing, check latest consumed text
                // If text matches, then remove text from variable and repeat process
                // If text doesn't match, then exit out of program, it is a fail
    const checkObject = {"(":")", "[":"]", "{":"}"};
    const checkKeys = Object.keys(checkObject);
    const checkValues = Object.values(checkObject);
    var openingText = "";
    var output = false;
    // check over the legnth of a string
    var l = s.length;
    for (let i = 0; i < l; i++) {
        // Consume text, check if open bracket
        if (checkKeys.includes(s[i])) { // if text at index i is an opening bracket
            openingText += s[i]; 
        } else {
            console.log('Invalid');
            break
        }
        console.log(openingText)
        // Check for closing bracket
        for (let j = i; j < l; j++) {
            if (checkObject[s[i]] == s[j]) {
                console.log("found opposite");
                output = true;
            }
        }
    }

    console.log(`Output: `,output);
    // each time there is an instance of a (, [, {
        // Check for the corresponding closing bracket
    // Failure states
        // If there is a closing of a different type
        // If there is different closing 
};

isValid("()");