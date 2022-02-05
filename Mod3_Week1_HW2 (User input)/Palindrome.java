import java.util.Scanner;
public class Palindrome {
   public static void main(String[] args) {
        
    Scanner scan = new Scanner(System.in);
    System.out.println("Enter a word to cherck if itsa palindrome");

    String userInput = scan.nextLine();
    String inputReverse="";
    char  eachCaharacter;

   

    for(int i=0; i<userInput.length(); i++) {
        eachCaharacter = userInput.charAt(i);
        inputReverse = eachCaharacter + inputReverse;
        inputReverse.trim();
    }

    if(userInput.equalsIgnoreCase(inputReverse)==true){
        System.out.println("The word you enetered is ******" + userInput + "*******" + "The reverse is ******" + inputReverse + "******");
        System.out.println("Hurray Your word is a Palindrome");
    }else{
        System.out.println("The word you enetered is ******" + userInput + "*******" + "The reverse is ******" + inputReverse + "******");
        System.out.println("Sorry Your word is NOT Palindrome");
    }
    System.out.println(userInput);


    
     
    }
    
}
