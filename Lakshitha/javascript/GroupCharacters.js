// Get input via browser popup
const userInput = prompt("Enter words separated by spaces:");

if (userInput) {
    const words = userInput.split(" ");
    const groups = Object.groupBy(words, (word) => word[0].toLowerCase());

    console.log("Grouped words:", groups);
}