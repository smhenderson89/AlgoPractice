var isPalindrome = function(s) {

    /* 
    test if s is a valid palindrome. If yes, return true, else reutrn false

    1) Convert s to all lower case
    2) remove all non alphanumeric letters from string
    3) reverseString string using a for loop
    4) test if cleanS == reverseS, if true, return true, else return false

    */

    // 

    // 1) Convert s to all lower case
    sLower = s.toLowerCase();
    // console.log(sLower)

    // 2) remove all non alphanumeric letters from string, using regex
    sClean = sLower.replace(/[^0-9a-z]/gi,'')
    // console.log(sClean);

    // 3) reverseString string using a for loop
    let reverseString = "";
    for (let i = sClean.length - 1; i >= 0; i--) {
        reverseString += sClean[i];
    }
    // console.log(reverseString);

    // 4) test if cleanS == reverseS, if true, return true, else return false
    if (reverseString === sClean) {
        return true
    } else {
        return false
    }

};
