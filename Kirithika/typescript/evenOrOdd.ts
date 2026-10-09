
export function checkEvenOdd(num: number): string {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

const inputNum = 7;
console.log(checkEvenOdd(inputNum));

