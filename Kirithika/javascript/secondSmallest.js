
let arr = [5, 2, 8, 1, 3];

let unique = [...new Set(arr)];
unique.sort((a, b) => a - b);

if (unique.length < 2) {
    console.log("Second smallest element does not exist");
} else {
    console.log("Second smallest:", unique[1]);
}
