function fizzBuzz(n) {
    // If n is multiple of 3 and 5, print FizzBuzz
    // If n is multiple of 3 but not 5, print Fizz
    // If not is mutiple of 5, but not 3, print Buzz
    // If none of those apply, print the value of i
    // console.log('function run');
    for (let i = 0; i <= n.length; i++) {
        // If divisible by 5 & 3, print FizzBuzz
        if ((i % 5 == 0) && (i % 3 == 0)) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) { // If n / 3 = 0, print Fizz
            console.log('Fizz');
        } else if (i % 5 == 0) { // If n / 5 = 0, print Buzz
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }

}

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10,11,12,13,14,15]

fizzBuzz(input)