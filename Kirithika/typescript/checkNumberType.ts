
export function checkNumber(num: number): string {
    if (Number.isInteger(num)) {
        return "Integer";
    } else {
        return "Floating-Point";
    }
}

const inputNum = 3.14;
console.log(checkNumber(inputNum));

