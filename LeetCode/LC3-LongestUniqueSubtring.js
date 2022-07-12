/* LeetCode #3 - 3Sum
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 10 **4
s consists of English letters, digits, symbols and spaces.
*/

/*
------Code -------

Find longest substring without repeating characters



// Find longest without repeating characters 
// w/o repeating characters

Brute Force: iterate left tor light, 
select s[i] -> push to array RepeatCharacters
if s[i] not in RepeatArray[], advance i++
if s[i] in RepeatArray[], then record Repeat.length, record a length -> output

after iterating through array, return output

Way to speed up?

-sorting doesn't help, order matters
-> sliding window technique!

//Create first window (initial selection without repeating characters)
  // Save found letters in RpeatArray[], record max.length
  // Check for duplicates
    // if letter in RepeatArray[], then return length to output

// Can adjust sliding window as needed based on selection 

*/

var lengthOfLongestSubstring = function (s) {
    // check string length
    if (!(s.length == 0)) {
        let start = 0;
        let end = 0;
        maxLength = 0; // return of the function
        stringSet = new Set(); // declare a set

        while (end < s.length) {
            // iterate over the string
            console.log('look at index', start, end)
            if (!stringSet.has(s[end])) { // if string not in the set
                stringSet.add(s[end]); // add char to Set
                console.log(stringSet)
                console.log('New Letter found!',s[end])
                end += 1; // increment end index
                maxLength = Math.max(maxLength, stringSet.size); // Establih new max length
                console.log('new MaxLength', maxLength);
            } else {
                // if the char is already in the Set
                console.log('duplicate char, remove from set', s[start]) // remove pervious windwo from the Set
                stringSet.delete(s[start]);
                console.log(stringSet);
                start += 1; // increment start to look at a further index
            }
        }
    return maxLength;
    } else {
        return maxLength;
    }
};

console.log(lengthOfLongestSubstring("CTCGGGTCCTGCCCGGCCCGTCCGCGCGCCGCTGCAGCGAGCCGGCGGGGGCCCGGCGCCGCGCGACGGAACGCCCTTAGCTCCGGCAGGCAGCTAAGGGGAACGCATGCATGGCGCAAGGAAGCTGGGAAACCGGCGAGAGGACCTCCTCCCCGCCTATCGGAGAGCGGCCGCGCGGTGGCAACCGCCATGCCGGCGCGCGGGGCACACCCGCTGGCCATTTGGGGCACGGGACGCCCGCCGCTTCCGGGGCTGCCCTCTGCGCGCGGGCGCCGAGCCGCGCTCGTGCCCGGCACCGCCACAAGCGGACCCGCACCAGACGTGTTACGCCCGCCACGCAGGCGGGGCCGGCCGGGGACCACCGGGCGTTCCACCGCGTCGGCGACCGCCAGTGAGCCACTGGGGCCGAGGGGTAACGTCGGTGCCCCTAAGAGCCCCCCGGTCGACGCGGGCGACTGCACTCCCGCCACGTCGTGGTCGCTCGCTATTCAGGGCTCGACCGACGCCGGGCCGCTTCCCGCTTGAAGTGCCGTGCGCGACAGGGTGCGTGCACCGTGCGGACCTGCTATGACTTGCCTCGGACCGGTTGGAGGTGCGGCCAGATCCCAGCTTGCGTCACCAGGGGGCCCACGCCCAGCCCCCAAGATCCACTGGCCTCCCAGACGCTGCAGGACTCGCGGCCCGGCACGCCCGGCGCCAGGCCCTAGTGCAGCGGGGCTTTCCTTCCGAGGTCGCCGGGAGGAGGGGTCGCCGGACCGGGCAGCTCTGGTGCCCTGACCGGGAGGGCCGTCGGCCCCCGGCCCTTAGGCCCTGCACTCGGCTCCATAAACGGGCCGCCGGACACGGGGCCCGTGGATCGGTAAGGGGCACGGGGCGCCCCCGGGCGCGGCGGACGGGCGGCTTGGCGCCCTGAGCACGGCCGCGCGCCCGAATCTGGCTCCGCCCTGGGGGCCCCGGACCCCGACGGTCGTAGACCGCAGGACCGGCCGGGGGGGTGCGC"))