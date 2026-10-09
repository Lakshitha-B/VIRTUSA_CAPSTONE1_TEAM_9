"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseWord(word) {
    return word.split("").reverse().join("");
}
function reverseWords(sentence) {
    const words = sentence.split(" ");
    return words
        .map(reverseWord)
        .join(" ");
}
function getSentence() {
    const commandLineArguments = process.argv.slice(2);
    return commandLineArguments.join(" ");
}
function main() {
    const sentence = getSentence();
    if (sentence.trim().length === 0) {
        console.log("Please provide a sentence.");
        return;
    }
    const reversedSentence = reverseWords(sentence);
    console.log("Original sentence:", sentence);
    console.log("Reversed sentence:", reversedSentence);
}
main();
//# sourceMappingURL=ReverseWords.js.map