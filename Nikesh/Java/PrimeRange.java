import java.util.*;

public class PrimeRange {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter starting number: ");
        int start = sc.nextInt();

        System.out.print("Enter ending number: ");
        int end = sc.nextInt();

        if (start > end) {
            System.out.println("Start number should be less than or equal to the end number.");
            sc.close();
            return;
        }

        System.out.println("Prime numbers:");

        for (int num = start; num <= end; num++) {
            if (num < 2)
                continue;

            boolean prime = true;

            for (int i = 2; i <= num / 2; i++) {
                if (num % i == 0) {
                    prime = false;
                    break;
                }
            }

            if (prime) {
                System.out.print(num + " ");
            }
        }

        sc.close();
    }
}