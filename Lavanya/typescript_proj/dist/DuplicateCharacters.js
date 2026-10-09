"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findDuplicateCharacters(input) {
    const characterFrequency = new Map();
    const duplicateCharacters = [];
    // Count the frequency of each character.
    for (const character of input) {
        if (character === " ") {
            continue;
        }
        const currentFrequency = characterFrequency.get(character) ?? 0;
        characterFrequency.set(character, currentFrequency + 1);
    }
    // Find characters that occur more than once.
    for (const [character, frequency] of characterFrequency) {
        if (frequency > 1) {
            duplicateCharacters.push(character);
        }
    }
    return duplicateCharacters;
}
function getInputString() {
    return process.argv.slice(2).join(" ");
}
function main() {
    const inputString = getInputString();
    if (inputString.trim().length === 0) {
        console.log("Please provide a string.");
        return;
    }
    const duplicateCharacters = findDuplicateCharacters(inputString);
    if (duplicateCharacters.length === 0) {
        console.log("No duplicate characters found.");
        return;
    }
    console.log("Duplicate characters:", duplicateCharacters.join(", "));
}
main();
//# sourceMappingURL=DuplicateCharacters.js.map