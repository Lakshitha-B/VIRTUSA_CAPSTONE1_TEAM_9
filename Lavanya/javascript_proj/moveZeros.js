const readline = require("readline");

function moveZerosToEnd(numbers) {
    let nonZeroIndex = 0;

    // Move all non-zero elements to the beginning.
    for (let currentIndex = 0; currentIndex < numbers.length; currentIndex++) {
        if (numbers[currentIndex] !== 0) {
            numbers[nonZeroIndex] = numbers[currentIndex];
            nonZeroIndex++;
        }
    }

    // Fill the remaining positions with zeros.
    while (nonZeroIndex < numbers.length) {
        numbers[nonZeroIndex] = 0;
        nonZeroIndex++;
    }

    return numbers;
}

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.question(
    "Enter array elements separated by spaces: ",
    (input) => {

        const numbers = input.trim().split(/\s+/).map(Number);

        console.log("Original array:", numbers);

        const result = moveZerosToEnd(numbers);

        console.log("Array after moving zeros:", result);

        readlineInterface.close();
    }
);