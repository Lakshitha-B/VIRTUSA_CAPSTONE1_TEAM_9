function reverseWord(word: string): string {
    return word.split("").reverse().join("");
}

function reverseWords(sentence: string): string {
    const words = sentence.split(" ");

    return words
        .map(reverseWord)
        .join(" ");
}

function getSentence(): string {
    const commandLineArguments = process.argv.slice(2);

    return commandLineArguments.join(" ");
}

function main(): void {
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