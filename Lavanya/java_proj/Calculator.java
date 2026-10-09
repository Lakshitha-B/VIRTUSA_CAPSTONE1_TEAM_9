import java.util.Scanner;

public class Calculator {

    public static double calculate(double firstNumber, double secondNumber, char operator) {
        switch (operator) {
            case '+':
                return firstNumber + secondNumber;

            case '-':
                return firstNumber - secondNumber;

            case '*':
                return firstNumber * secondNumber;

            case '/':
                if (secondNumber == 0) {
                    throw new ArithmeticException("Cannot divide by zero.");
                }
                return firstNumber / secondNumber;

            default:
                throw new IllegalArgumentException("Invalid operator.");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double firstNumber = scanner.nextDouble();

        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);

        System.out.print("Enter second number: ");
        double secondNumber = scanner.nextDouble();

        try {
            double result = calculate(firstNumber, secondNumber, operator);
            System.out.println("Result: " + result);
        } catch (ArithmeticException | IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }

        scanner.close();
    }
}