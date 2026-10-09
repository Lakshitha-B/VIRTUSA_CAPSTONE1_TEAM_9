let paragraph: string = "hello world hello java world hello";

let words: string[] = paragraph.split(" ");

let frequency: Map<string, number> = new Map();

for (let word of words) {

    if (frequency.has(word)) {
        frequency.set(word, frequency.get(word)! + 1);
    } else {
        frequency.set(word, 1);
    }
}

console.log(frequency);
