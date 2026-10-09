const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by space: ", function(input) {

    let arr = input.split(" ").map(Number);

    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log("Array:", arr);
    console.log("Even elements:", evenCount);
    console.log("Odd elements:", oddCount);

    rl.close();
});