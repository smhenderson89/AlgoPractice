// test with a set

mySet = new Set()

s = "abcabcbbdD"

for (let i = 0; i<s.length; i++) {
    if (!mySet.has(s[i])) { // if Char not in the set
        mySet.add(s[i])
    } 
}

console.log(mySet);
