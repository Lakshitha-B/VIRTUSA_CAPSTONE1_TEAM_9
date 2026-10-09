const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input) => {

    const reversed = input.split("").reverse().join("");

    console.log("Reversed string:", reversed);

    rl.close();
});
