/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    // Take an interger, convert it to roman numerals    
    let divisors = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let l = divisors.length;
    let roman = "";
    // Break down interger into it's respective components
    for (let i = 0; i < l; i++) {
        while (num >= divisors[i]) { // While number is great than divisor
            num = (num - divisors[i]) // Subtract divisors from total
            roman += numerals[i]; // Add corresponding roman numeral to the running tally
        } 
    }
    console.log(roman) // console log the answer 
};

intToRoman(1994);
