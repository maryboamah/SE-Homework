package oopConcept;

import java.util.Arrays;

public class Person implements PersonInterface {
	static int count = 0;
	 String name;
	 int age;
	 char gender;
	 boolean isMarried;
	 
	 String[] subjects;
	
	

	//constructors
	

	public Person(String name, int age, char gender, boolean isMarried, String[] subjects) {
		// TODO Auto-generated constructor stub
		this.name = name;

		this.age = age;

		this.gender = gender;

		this.isMarried = isMarried;
		
		this.subjects = new String[3];
		count++;
	}

	 public String toString(){
		 return  "Name: " + this.name + "\n"
		         + "Age: " + this.age + "\n"

		         + "Gender: " + this.gender + "\n"
		         
//		         + "Type of Person: " + isEmployeeOrStudent(null) + "\n"

		         + "Married: " + this.isMarried + "\n"
		         +"Subjects: " + Arrays.toString(this.subjects);
	 }
	
	
	// interface Methods
	public void kickOut() {
		System.out.println("I am not a student Kick me out");
	}

	public double calculate(int num) {
		return num;
	}

	public String[] changeSubject(int index) {
		// TODO Auto-generated method stub
		return null;
	}
	
	//methods
	
	//find out if person is an employee or student
	public static boolean isEmployeeOrStudent(Person person) {
		if (person.getClass() == Employee.class || person.getClass() == Student.class ) {
			System.out.println("You are part of " + collegeName);
			System.out.println("You are a(n)  " + person.getClass().getSimpleName());
			return true;
		}else {
			System.out.println("You are not part of " + collegeName + ". Are you a visitor?");
			return false;
		}
	}
	
	
	public void whoAmI() {
		System.out.println("i am part of " + collegeName);
	}
//	
	
	//create a person
public static boolean isLegalToVote(Person person) {
	if (person.age >= 18) {
		System.out.println("Yo can vote");
		return true;
		
	}else {
		System.out.println("Yo can vote");
		return true;
	}
}
	

public static String numberCount() {
	
	return "The number of people in" + collegeName + "is " + count ;
}
	

}
