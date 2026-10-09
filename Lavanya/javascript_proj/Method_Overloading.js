const readline = require("readline");

class Calculator {

    calculate(...values) {

        if (values.length === 0) {
            return 0;
        }

        if (values.length === 1) {
            return values[0] * values[0];
        }

        if (values.length === 2) {
            return values[0] + values[1];
        }

        if (values.length === 3) {
            return values[0] + values[1] + values[2];
        }

        throw new Error("Unsupported number of arguments.");
    }
}

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.question(
    "Enter numbers separated by spaces: ",
    (input) => {

        if (input.trim() === "") {
            console.log("Please enter at least one number.");
            readlineInterface.close();
            return;
        }

        const numbers = input.trim().split(/\s+/).map(Number);

        // Validate user input.
        if (numbers.some(Number.isNaN)) {
            console.log("Invalid input. Please enter only numbers.");
            readlineInterface.close();
            return;
        }

        const calculator = new Calculator();

        try {
            const result = calculator.calculate(...numbers);
            console.log("Result:", result);
        } catch (error) {
            console.log("Error:", error.message);
        }

        readlineInterface.close();
    }
);