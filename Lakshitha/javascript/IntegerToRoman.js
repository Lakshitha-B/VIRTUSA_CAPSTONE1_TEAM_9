const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer (1-3999): ", (input) => {

    let num = parseInt(input);
    let result = "";

    const values = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    if (num < 1 || num > 3999 || isNaN(num)) {
        console.log("Please enter a valid integer between 1 and 3999.");
    } else {

        for (let [value, symbol] of values) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }

        console.log("Roman numeral:", result);
    }

    rl.close();
});
