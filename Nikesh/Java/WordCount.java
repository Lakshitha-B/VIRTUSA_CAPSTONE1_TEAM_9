import java.io.*;

public class WordCount {
    public static void main(String[] args) {
        try {
            // Read from input file
            BufferedReader br = new BufferedReader(
                    new FileReader("input.txt"));

            // Write to output file
            BufferedWriter bw = new BufferedWriter(
                    new FileWriter("output.txt"));

            String line;
            int wordCount = 0;

            while ((line = br.readLine()) != null) {
                String[] words = line.trim().split("\\s+");

                if (!line.trim().isEmpty()) {
                    wordCount += words.length;
                }
            }

            bw.write("Total number of words: " + wordCount);

            br.close();
            bw.close();

            System.out.println("Word count written to output.txt");
        } 
        catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}