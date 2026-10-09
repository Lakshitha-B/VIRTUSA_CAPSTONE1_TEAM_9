const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter numbers separated by space: ", function(input) {

    let arr = input.split(" ").map(Number);

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    console.log("Array:", arr);
    console.log("Smallest element:", smallest);

    rl.close();
});