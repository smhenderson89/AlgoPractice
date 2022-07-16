x = ["", "b"]

for (let i = 0; i < x.length; i++) {
    if (x[i].length == 0) {
        console.log('no length')
    } else if (x[i].length == 1) {
        console.log('1 length')
        console.log(x[i])
    }
    y = x[i].split("")
    console.log(y)
}