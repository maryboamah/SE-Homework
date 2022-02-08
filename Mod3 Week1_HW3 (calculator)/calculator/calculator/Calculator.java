package calculator;
import java.util.Scanner;

public class Calculator {
	
	static int add(int a, int b) {
		int result = a + b;
		return result;
	}
	
static int subtract(int a , int b) {
		return a - b;
	}
static int multiply(int a, int b) {
	return a * b;
}
static int divide(int a, int b) {
		return a / b;
	}

	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		  System.out.println("Enter a number between 1-5 for  the options for this calculator:");
		  System.out.println("OPTIONS:");
		  System.out.println("1:ADD:");
		  System.out.println("2:SUBTRACT:");
		  System.out.println("3:MULTIPLY:");
		  System.out.println("4:DIVIDE:");
		  System.out.println("5:EXIT:");
		  
		  
	        int userChoice = scan.nextInt();
	        System.out.println("Enter the two numbers you want to work on");
	        
	        System.out.println("ENTER FIRST NUMBER");
	        int firstNumber = scan.nextInt();
	        System.out.println("ENTER SECOND NUMBER");
	        int secondNumber = scan.nextInt();
	        
	        
	        switch (userChoice) {
	        case 1:
	          System.out.println( firstNumber + "+"  + secondNumber + "=" + add(firstNumber, secondNumber));
	          
	          break;
	        case 2:
	          System.out.println("Tuesday");
	          break;
	        case 3:
	          System.out.println("Wednesday");
	          break;
	        case 4:
	          System.out.println("Thursday");
	          break;
	        case 5:
	          System.out.println("Friday");
	          break;
	       default:
	          System.out.println("");
	          break;
	        
	      }
	        
	        
	        

	}

}
