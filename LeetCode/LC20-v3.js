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


// If encounter opening/left paraenthis, move it to stack
// If encounter close parenthese, check for correct closing
// Wait until stack is empty

var isValid = function(s) {
    const opening = ['(', '[', '{'];
    const closing = [')', ']', '}'];
    const match = {'(':')', '[':']', '{':'}'};
    leftSymbol = [];

    // Iterate over string left to right
    for (let i = 0; i < s.length; i++) {
        if (opening.includes(s[i])) { // If opening symbol encounter
            leftSymbol.push(s[i]);
        } else if (closing.includes(s[i])) { // If right symbol matches ')', '}', ']'
            if (leftSymbol.length !== 0) { // Check that there is an existing left opening already
                lastLeftChar = leftSymbol[leftSymbol.length - 1]; // Grab right most character in array
                rightMatch = match[lastLeftChar]; // Check for corresponding match
                if (s[i] === rightMatch) { // If they are a matching pair
                    leftSymbol.pop(); // Remove left ({[ from array
                } else {
                    // console.log('No match');
                    return false
                }
            } else { // closing bracket with no match
                return false;
            }
        } else { // If no valid symbols are encounter
            return false;
        }
    }
    return leftSymbol.length === 0;

}

console.log(isValid('(])'));