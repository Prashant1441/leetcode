let n = 19;

const getNum = function(n) {
    let seen = new Set(); // To track visited numbers

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        let result = 0; // Reset result for every new number

        // Calculate sum of squares of digits
        while (n > 0) {
            let digit = n % 10;
            result += Math.pow(digit, 2);
            n = Math.floor(n / 10);
        }

        n = result; // Update `n` to the new sum
    }

    return n === 1; // Return true if we reach 1
};

console.log(getNum(n)); // Output: true (19 is a happy number)
