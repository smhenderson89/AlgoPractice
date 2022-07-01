// profit = [7,2,5,3,6,4];

// low = Math.min(...profit);
// lowIndex = profit.indexOf(low)

// remainingArray = profit.slice(lowIndex);
// high = Math.max(...remainingArray);

// highIndex = profit.indexOf(high, lowIndex)

// console.log('Low:', low, '@:', lowIndex);
// console.log('High:', high, '@:', highIndex);

// console.log(len);

// half = Math.floor(len / 2);
// console.log(half);

// if (len % 2 == 1) {
//     left = Math.floor(len / 2);
//     right = len - left;
// } else {
//     left = right = len / 2;
// }

// console.log(left, right);



// y = x.slice(0, half)
// z = x.slice(half)
// console.log(y);
// console.log(z);

array = [-8,-8, -4, -1, -1, -0, 1, 2, 4, 4, 16]

a = 0
b = 1
c = array[a]
r = array[(array.length) - b]

subArray = array.slice(1, array.length - 1)
console.log(subArray);
sum = -(c + r);
console.log(sum);
console.log(subArray.includes(sum))
sumIndex = subArray.indexOf(sum)
console.log(sumIndex);

// if (sumIndex == 0 ) {
//     console.log('check for duplicates');
//     // check adjacent
//     if (array[1] == sum) {
//         console.log('triplet found');
//     }
// }

// check for duplicates




