import java.util.Scanner;

public class FactorialCalculator {

    // Calculates factorial using recursion
    public static long factorialRecursive(int number) {
        if (number == 0 || number == 1) {
            return 1;
        }

        return number * factorialRecursive(number - 1);
    }

    // Calculates factorial using iteration
    public static long factorialIterative(int number) {
        long factorial = 1;

        for (int i = 2; i <= number; i++) {
            factorial *= i;
        }

        return factorial;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a non-negative integer: ");
        int number = scanner.nextInt();

        if (number < 0) {
            System.out.println("Factorial is not defined for negative numbers.");
        } else if (number > 20) {
            System.out.println("Please enter a number between 0 and 20.");
        } else {
            System.out.println("Factorial using recursion: "
                    + factorialRecursive(number));

            System.out.println("Factorial using iteration: "
                    + factorialIterative(number));
        }

        scanner.close();
    }
}x