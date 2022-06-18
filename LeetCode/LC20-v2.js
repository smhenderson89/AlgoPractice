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
    const validPattern = ["()","{}","[]"];
    // Save s as copy 
    var copy = s;
    const l = copy.length;
    if (l % 2 == 1) {
        console.log('input is odd number, false')
        return false
    }

    for (let i = 0; i < l; i++) {
        // Check if for end of search
        if (copy.length == 0) {
            console.log('All matches found')
            return true; // Everything matches
        } 

        // Capture next two characters of string
        if (copy.length == 2) { // if only 2 characters left
            checkTwo = copy;
        } else {
            checkTwo = copy.slice(i, i+2)
        }
        console.log('Checking: ', checkTwo);

        // Check pattern
        if (validPattern.includes(checkTwo)) {
            console.log('Valid Pattern:' , checkTwo); 
            copy = copy.slice(i+2, l);
            console.log('New copy: ', copy);
        } else {
            console.log('Continue Searching:', checkTwo);
        }
    }
    //  Look in groups of 2 intergers
    //      If there is a vlid match from validPattern within, remove that slice from the list
    //          Repeat removing slices until have reached the end of copy and no more matches
    //              If at end of check, copy is left with unmatched paratheses, then return false
    //              Otherwise, return true      
}

console.log(isValid("({})"));