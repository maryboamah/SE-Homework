public class Score{
    public static void main(String args[]){
        int studentScore = 70;
        if (studentScore >= 90){
            System.out.println("You got an A ");

        }else if(studentScore >=80 && studentScore <90){
            System.out.println("You got a B ");

        }else if (studentScore >=70 && studentScore<80){
            System.out.println("You got a C ");

        }else if(studentScore >= 55 && studentScore <70  ){
            System.out.println("You got a D ");

        }else{
            System.out.println("Sorry Try again Next Year ");
        }
    }
}