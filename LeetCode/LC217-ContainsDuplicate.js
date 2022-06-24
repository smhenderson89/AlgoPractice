var containsDuplicate = function(nums) {
	// Create empty hash array, fill spaces with null
	len = nums.length
	hash = new Array(len).fill(null) 

	// Iterate over nums array 
	for (let i = 0; i < len; i++) {
		// Insert nums[i] into hash array
		insertIndex = nums[i]
        // console.log('insertIndex, ', insertIndex, 'value:', nums[i]);
		if (hash[insertIndex] == null) {
            // console.log('insert into hash');
			hash[insertIndex] = insertIndex
            // console.log(hash);
        } else { // If attempt to insert at already filled spot
            // console.log("@i:",i, 'value: ', insertIndex);
            // console.log('hash conflict');
	        return true
        }
    }
// console.log('array is unique');
return false
};


console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
