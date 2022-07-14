// testing with hashtables

hashMap = new Map();

mag = 'aba';

// hashMap.set(2, 7);
// console.log(hashMap)
// console.log(hashMap.get(2));
// console.log(hashMap.has(2));

for (let i=0; i < mag.length; i++) {
    // If there is a collision
    hash = mag.charCodeAt(i)

    if (hashMap.get(hash)) { // if hash already exits
        console.log('Collision with', mag[i])
        // use hash as the basis for a linked list for all values 
        // create an array table, using the hash as the key value
        // the pair value(s) will be all elements that correspond to the same hash

        // if linked list already exists, the add collision value to the existing linked list (list.push)
    }

        
    hashMap.set(hash, mag[i])
}

console.log(hashMap)