let input = prompt("Enter numbers separated by spaces:");

let numbers = input.split(" ").map(Number);

let uniqueValues = new Set(numbers);

console.log("Unique values:", [...uniqueValues]);

