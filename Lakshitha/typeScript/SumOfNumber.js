"use strict";
let number = 12345;
let sum = 0;
while (number > 0) {
    let digit = number % 10;
    sum = sum + digit;
    number = Math.floor(number / 10);
}
console.log("Sum of digits:", sum);
