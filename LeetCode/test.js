// testing with hashtables

letterCounts = new Map();

mag = 'abcdab';

for (let i =0; i < mag.length; i++) {
    // use letterCounts to keep track of leters in mag
    if (letterCounts.get(mag[i])) { // if letter already has a count
        count = letterCounts.get(mag[i]) + 1 // increase count by 1
        letterCounts.set(mag[i], count) // update letterCounts
    } else { // if letter doesn't exist in letterCounts
        letterCounts.set(mag[i], 1) // create intial count of 1
    }
}

console.log(letterCounts);