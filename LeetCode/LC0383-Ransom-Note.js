/* 383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 10**5
ransomNote and magazine consist of lowercase English letters.
*/

// ----CODE ---

// Edge Cases: 
    


// Iterate over ransomNote, 
    // For each character, note[i], check if character exists in Map
    // If so, subtract count by -1
    // If character is required and count == 0, then return false
    // Else return true

var canConstruct = function(ransomNote, magazine) {
    noteLen = ransomNote.length;
    magLen = magazine.length;

    // If magazine string length is 0 & ransomNote.length > 1, return false
    if (magLen == 0 && noteLen > 1) {
        return false 
    // If ransomNote.length > magazine.length, return false
    } else if (noteLen > magLen) {
        return false
    } else {
        // Iterate over magainze string, create Map object and scan over magazine to create library
        letterCounts = new Map();
        for (let i =0; i < magLen; i++) {
            // use letterCounts to keep track of leters in magazine
            if (letterCounts.get(magazine[i])) { // if letter already has a count
                count = letterCounts.get(magazine[i]) + 1 // increase count by 1
                letterCounts.set(magazine[i], count) // update letterCounts
            } else { // if letter doesn't exist in letterCounts
                letterCounts.set(magazine[i], 1) // create intial count of 1
            }
        }

        // console.log(letterCounts)

        // Iterate over ransom note, check against letterCounts map
        for (let j=0; j < noteLen; j++) {
            letter = ransomNote[j]
            if (letterCounts.get(ransomNote[j]) >= 1) {
                count = letterCounts.get(ransomNote[j]) - 1
                letterCounts.set(ransomNote[j], count)
                // console.log(letterCounts)
            } else {
                return false
            }
        }
        return true
    }
};

console.log(canConstruct('givemethemoney','givemethemoneyg'))