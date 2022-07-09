/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

link: https://leetcode.com/problems/valid-anagram/

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 10**4
s and t consist of lowercase English letters. */

var isAnagram = function(s, t) {

    // sort s & t in alphabetical order
    // if s & t are equal, then they are anagrams, return true
    // else, return false

    s = s.split("").sort().join("")
    t = t.split("").sort().join("")

    if (s === t) {
        return true
    } else {
        return false
    }    
};

console.log(isAnagram("!cat","cat!"))
