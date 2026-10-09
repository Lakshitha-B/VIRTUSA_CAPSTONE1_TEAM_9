let str: string = prompt();

let reversed: string = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a palindrome");
}
