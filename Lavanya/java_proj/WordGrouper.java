import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class WordGrouper {

    public static Map<Character, List<String>> groupWords(String[] words) {
        Map<Character, List<String>> groupedWords = new LinkedHashMap<>();

        for (String word : words) {
            if (word == null || word.isEmpty()) {
                continue;
            }

            char firstCharacter = Character.toLowerCase(word.charAt(0));

            groupedWords
                    .computeIfAbsent(firstCharacter, key -> new ArrayList<>())
                    .add(word);
        }

        return groupedWords;
    }

    public static void displayGroups(Map<Character, List<String>> groupedWords) {
        for (Map.Entry<Character, List<String>> entry : groupedWords.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of words: ");
        int numberOfWords = scanner.nextInt();

        String[] words = new String[numberOfWords];

        System.out.println("Enter the words:");

        for (int i = 0; i < numberOfWords; i++) {
            words[i] = scanner.next();
        }

        Map<Character, List<String>> groupedWords = groupWords(words);

        System.out.println("\nGrouped words:");
        displayGroups(groupedWords);

        scanner.close();
    }
}