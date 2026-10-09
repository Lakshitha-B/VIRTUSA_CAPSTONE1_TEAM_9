
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter minimum value: ", (minInput) => {
    rl.question("Enter maximum value: ", (maxInput) => {
        let min = Number(minInput);
        let max = Number(maxInput);

        if (
            minInput.trim() === "" ||
            maxInput.trim() === "" ||
            !Number.isInteger(min) ||
            !Number.isInteger(max) ||
            min > max
        ) {
            console.log("Invalid input! Enter integers with min <= max.");
        } else {
            let randomNum =
                Math.floor(Math.random() * (max - min + 1)) + min;

            console.log("Random number:", randomNum);
        }

        rl.close();
    });
});
