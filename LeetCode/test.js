// testing with hashtables

hashMap = new Map();

nums = [12, 24, 5, 7, 9, 11, 13, -1, -9]
target = 2

// hashMap.set(2, 7);
// console.log(hashMap)
// console.log(hashMap.get(2));
// console.log(hashMap.has(2));

for (let i=0; i < nums.length; i++) {
    difference = target - nums[i] // check difference from target and nums[i]
    
    // check if hashMap has already mapped num difference (i.e. twoSum pair exists)
    if (hashMap.has(difference)) {
        console.log('Found pair');
        // Working on getting the return correct
        console.log ([hashMap.get(difference), i])
    }

    // add key, value pair to hash map
    hashMap.set(nums[i], difference)
    // console.log(hashMap);
}

// console.log(hashMap)