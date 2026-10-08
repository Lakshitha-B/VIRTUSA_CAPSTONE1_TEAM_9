let number: number = 12345;
let sum: number = 0;

while (number > 0) {
    let digit: number = number % 10;

    sum = sum + digit;

    number = Math.floor(number / 10);
}

console.log("Sum of digits:", sum);