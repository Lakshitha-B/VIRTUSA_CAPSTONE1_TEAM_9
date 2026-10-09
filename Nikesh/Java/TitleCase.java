import java.util.*;

public class TitleCase {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String sentence = sc.nextLine();

        String trimmed = sentence.trim();

        if (trimmed.isEmpty()) {
            System.out.println("Title Case: ");
            sc.close();
            return;
        }

        String[] words = trimmed.toLowerCase().split("\\s+");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            if (word.isEmpty()) continue;
            result.append(Character.toUpperCase(word.charAt(0)))
                  .append(word.substring(1))
                  .append(" ");
        }

        System.out.println("Title Case: " + result.toString().trim());

        sc.close();
    }
}
