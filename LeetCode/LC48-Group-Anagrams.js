/* 
LeetCode #49 - Group Anagrams
Link: https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 
Constraints:

1 <= strs.length <= 10**4
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

var groupAnagrams = function (strs) {
  // strs = ["a"]
  // strs = ["eat","tea","tan","ate","nat","bat"]
  // strs = ["eat", "late", "later", "Pneumonoultramicroscopicsilicovolcanoconiosis"]
  strs = ["", "b"];

  /* 
strs = ["nozzle","punjabi","waterlogged","imprison","crux","numismatists","sultans","rambles","deprecating",
"aware","outfield","marlborough","guardrooms","roast","wattage","shortcuts","confidential","reprint",
"foxtrot","dispossession","floodgate","unfriendliest","semimonthlies","dwellers","walkways","wastrels"]
*/

  //strs = ["", "b"] -> Expected -> [["b"], [""]]
  // Generate hash for each string
  for (let i = 0; i < strs.length; i++) {
    x = strs[i].split("");
    stringHash = 1;

    for (let j = 0; j < x.length; j++) {
      if (x[j].length == 0) {
        // if str length is 0
        stringHash = 1;
      } else if (x[j].length == 1) {
        // if str length is 1
        stringHash *= x[j].charCodeAt(0);
      } else {
        stringHash *= x[j].charCodeAt(0); // multiply stringHash by ASCII code for each letter to make a unique hash
      }
    }
    // Set a hash table where the key is the hash, and the values are the strings that have the same hash
    if (!hashTable.has(stringHash)) {
      // if hash for string doesn't exist
      // Create new hash value, with hash as value and array of as value
      hashTable.set(stringHash, [strs[i]]);
    } else {
      // if hash key already exists
      stringArray = hashTable.get(stringHash);
      stringArray.push(strs[i]); // Push new string with same hash to hash table
      hashTable.set(stringHash, stringArray);
    }

    // console.log(hashTable);
  }

  // One complete, iterate over the hash table with the value of the strings
  // For similar groups, output as similar array
  output = [];
  for (let [key, value] of hashTable) {
    output.push(value);
  }
};
