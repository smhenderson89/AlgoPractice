function countDown(n) {
    console.log(n)
    const newNumber = n - 1;
    if (newNumber > 0) {
        countDown(newNumber)
    }
}

countDown(5)