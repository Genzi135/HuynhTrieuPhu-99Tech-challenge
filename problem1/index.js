//Problem 1: Three ways to sum to n
// # Task
// Provide 3 unique implementations of the following function in JavaScript.
// **Input**: `n` - any integer
// *Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
// **Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.


// ANSWER
// In this problem, i'll check the input is number or not, if the input is not a number return 'Please provide a number' and if the input is a number return result for this problem

//For loop
var sum_to_n_a = function (n) {
    let result = 0;
    if (isNaN(n)) {
        return 'Please provide a number'
    } else {
        for (let i = 0; i <= n; i++) {
            result += i;
        }
    }
    return result;
};

//Recursive
var sum_to_n_b = function (n) {
    if (isNaN(n)) {
        return 'Please provide a number'
    } else {
        if (n === 1) {
            return n;
        }
        return n + sum_to_n_b(n - 1)
    }
};

//Math logic
var sum_to_n_c = function (n) {
    if (isNaN(n)) {
        return 'Please provide a number'
    } else {
        return ((n * (n + 1)) / 2);
    }
};




console.log(sum_to_n_a(5)); // result=15
console.log(sum_to_n_b(5)); // result=15
console.log(sum_to_n_c(5)); // result=15

console.log(sum_to_n_a(15)); // result=120
console.log(sum_to_n_b(15)); // result=120
console.log(sum_to_n_c(15)); // result=120