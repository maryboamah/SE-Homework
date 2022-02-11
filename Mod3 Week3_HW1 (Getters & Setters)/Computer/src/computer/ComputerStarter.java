package computer;

public class ComputerStarter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	//creating computer objects
		Computer computer1 = new Computer();
		
		Computer computer2 = new Computer();
		
		Computer computer3 = new Computer();
		
		
		//assigning or setting the properties of computer 1
		computer1.setName("Apple");
		
		computer1.setCost(4589.00);
		
		computer1.setYear(2022);
		
		//assigning or setting the properties of computer 2
				computer2.setName("Lenovo");
				
				computer2.setCost(4546.489);
				
				computer2.setYear(2021);
				
				
				//assigning or setting the properties of computer 3
				computer3.setName("Lenovo");
				
				computer3.setCost(454);
				
				computer3.setYear(2021);
				
				
				//Displaying or getting properties for computer 1
				System.out.println("Information for computer 1");
				System.out.println("Computer Name : " + computer1.getName());
				
				System.out.println("Computer Yaer : " + computer1.getYear());
				
				System.out.println("Computer Cost : " + computer1.getCost());
				
				System.out.println();
				
				
				
				//Displaying or getting properties for computer 2
				System.out.println("Information for computer 2");
				System.out.println("Computer Name : " + computer2.getName());
				
				System.out.println("Computer Yaer : " + computer2.getYear());
				
				System.out.println("Computer Cost : " + computer2.getCost());
				
				System.out.println();
				
				//Displaying or getting properties for computer 3
				System.out.println("Information for computer 3");
				System.out.println("Computer Name : " + computer3.getName());
				
				System.out.println("Computer Yaer : " + computer3.getYear());
				
				System.out.println("Computer Cost : " + computer3.getCost());
				System.out.println();
				
				
				
				
//				total number of computers stored in database so far
				
				System.out.println("The total number of computers stored in data is : " + Computer.getNumberOfComputers());


	}

}
