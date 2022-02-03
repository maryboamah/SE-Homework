public class OddEven {
     public static void main(String[] args) {
        int num = 17;
        if(num % 2 != 0){
            System.out.println("Cool");

        }else if(num %2 == 0 && (num > 1 && num <= 5) ){
            System.out.println("Not Cool");

        }else if(num %2 == 0 && (num > 5 && num <= 20) ){
            System.out.println(" Cool");

        }else if(num %2 == 0 && (num > 20) ){
            System.out.println("Not Cool");

        }
    }
}
