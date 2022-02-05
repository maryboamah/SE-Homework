import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter a whole number ");
        int userNumber = scan.nextInt();
        int previousNumber = 0;
        int currentNumber = 1;

        if (userNumber % 2 != 0) {
            for (int i = 0; i < userNumber; i++) {

                System.out.print(previousNumber + " ");

                System.out.print(currentNumber + " ");

                previousNumber = currentNumber + previousNumber;

                currentNumber = previousNumber + currentNumber;
                userNumber--;
            }

        } else {
            for (int i = 0; i < userNumber + 1; i++) {

                if (i < userNumber) {

                    System.out.print(previousNumber + " ");

                    System.out.print(currentNumber + " ");

                    previousNumber = currentNumber + previousNumber;

                    currentNumber = previousNumber + currentNumber;
                    userNumber--;
                } else {
                    System.out.print(previousNumber + " ");

                }

            }

        }

    }
}