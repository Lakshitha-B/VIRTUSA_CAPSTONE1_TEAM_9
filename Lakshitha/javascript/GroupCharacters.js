const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter words separated by spaces: ", (input) => {

    const words = input.split(" ");
    const groups = new Map();

    for (let word of words) {
        const firstChar = word[0].toLowerCase();

        if (!groups.has(firstChar)) {
            groups.set(firstChar, []);
        }

        groups.get(firstChar).push(word);
    }

    console.log("\nGrouped words:");

    for (let [key, value] of groups) {
        console.log(key + " -> " + value.join(", "));
    }

    rl.close();
});

