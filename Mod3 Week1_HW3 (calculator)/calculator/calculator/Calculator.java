package calculator;
import java.util.Scanner;
import java.util.*;
import java.lang.*;
public class Calculator {
	
	static int add(int a, int b) {
		int result = a + b;
		return result;
	}
	
static int subtract(int a , int b) {
	int result = a - b;
	return result;
	}
static int multiply(int a, int b) {
	int result = a * b;
	return result;
}
static double divide(int a, int b) {
	double result = (double)a / (double)b;
	return result;
	}
static void userInput() {
	
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
	      
	        
	        
	        switch (userChoice) {
	        
	        case 1:
	        	
	        	  System.out.println("Enter the two whole numbers you want to work on");
	  	        
	  	        System.out.println("ENTER FIRST NUMBER");
	  	        int firstNumberAdd = scan.nextInt();
	  	        System.out.println("ENTER SECOND NUMBER");
	  	        int secondNumberAdd = scan.nextInt();
	          System.out.println( firstNumberAdd + "+"  + secondNumberAdd + "=" + add(firstNumberAdd, secondNumberAdd));
	          
	          break;
	        case 2:
	        	
	        	  System.out.println("Enter the two whole numbers you want to work on");
	  	        
	  	        System.out.println("ENTER FIRST NUMBER");
	  	        int firstNumberSubtract = scan.nextInt();
	  	        System.out.println("ENTER SECOND NUMBER");
	  	        int secondNumberSubtract = scan.nextInt();
	          System.out.println(firstNumberSubtract + "-"  + secondNumberSubtract + "=" + subtract(firstNumberSubtract, secondNumberSubtract));
	          break;
	        case 3:
	        	
	        	  System.out.println("Enter the two whole numbers you want to work on");
	  	        
	  	        System.out.println("ENTER FIRST NUMBER");
	  	        int firstNumberMultiply = scan.nextInt();
	  	        System.out.println("ENTER SECOND NUMBER");
	  	        int secondNumberMultiply = scan.nextInt();
	          System.out.println(firstNumberMultiply + "*"  + secondNumberMultiply + "=" + multiply(firstNumberMultiply, secondNumberMultiply));
	          break;
	        case 4:
	        	  System.out.println("Enter the two whole numbers you want to work on");
	  	        
	  	        System.out.println("ENTER FIRST NUMBER");
	  	        int firstNumberDivide = scan.nextInt();
	  	        System.out.println("ENTER SECOND NUMBER");
	  	        int secondNumberDivide = scan.nextInt();
	          System.out.println(firstNumberDivide + "/"  + secondNumberDivide + "=" + divide(firstNumberDivide, secondNumberDivide));
	          break;
	        case 5:
	        	
	          System.exit(0);
	          break;
	       default:
	          System.out.println("The number you chose is not an option. Good Bye");
	          System.exit(0);
	          break;
	        
	      }
	        
	        
	        

	}

}
