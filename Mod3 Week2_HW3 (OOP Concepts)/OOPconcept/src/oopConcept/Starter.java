package oopConcept;
import java.util.Scanner;
import java.util.Arrays;
import java.util.HashMap;

public class Starter {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Person person = new Person("Adwoa", 14, 'F',true, new String[]{});
//		Person person1 = new Employee(2,"Adwoa", 14, 'F',true, new String[]{"English"});
//		
//		Employee.isEmployeeOrStudent(person1);
//		System.out.print(Person.isEmployeeOrStudent(person1));
		
		Scanner scan = new Scanner(System.in);
		
		//Create new objects of students and class based on user inputs
		
		System.out.println("Hello, Welcome to " + Person.collegeName +"\n");
		
		System.out.println("Let's begin the registration process." +"\n");
		System.out.println("Do you want to register as a student or an Employee" + Person.collegeName +"\n");
		
		String registrationType = scan.nextLine();
		System.out.println(registrationType);
		
		//get name of user
		System.out.println("What is your name " +"\n");
		String name = scan.nextLine();
		
		//get age of user
		System.out.println("What is your age" +"\n");
		int age = scan.nextInt();
		
		
		
		//get gender of user
		System.out.println("What is your gender. Type F for female and M for Male" +"\n");
		char gender = scan.next().charAt(0);
		
		//get subjcets of users
				System.out.println("What subjects are you taking/teaching. Enter not more than three" +"\n");
				String[] subjects = new String[3];
				for(int i=0; i< subjects.length; i++) {
					
					subjects[i] = scan.next();
					
				}
				
				System.out.println(Arrays.toString(subjects));
				
				//check if married or not
				
				System.out.println("Are you married. Type true if you are married and false if you are not" +"\n");
				boolean married = scan.nextBoolean();
				int id = (int)Math.random() * 10;
				
				String state = scan.nextLine();
		
		
		
		if(registrationType.toLowerCase().equals( "student")) {
			
			Student student  = new Student(name,age,gender,married,subjects );
			student.subjects = new String[] {Arrays.toString(subjects)};
			
			System.out.println("**********STUDENT RECORD********************");
			System.out.print(student.toString()+"\n");
		
			student.whoAmI();
			System.out.println();
			System.out.println("Current GPA " + student.calculate(60) + "\n");
			System.out.println("**********STUDENT RECORD********************");
			
			
			System.out.println();
		} else if(registrationType.toLowerCase().equals( "employee")) {
			Employee employee = new Employee(id, name,age,gender,married,subjects);
			employee.subjects = new String[] {Arrays.toString(subjects)};
			System.out.println("**********EMPLOYEE RECORD********************");
			System.out.print(employee.toString() + "\n");
			employee.whoAmI();
			
			System.out.println("**********EMPLOYEE RECORD********************");
			
		}else {
			Person person2 = new Person(name, age,gender,married,subjects );
			System.out.print(person2.toString() + "\n");
			person2.kickOut();
		}
		System.out.println(Person.numberCount() +"\n");
		System.out.println(Student.numberCount()+"\n");
		System.out.println(Employee.numberCount()+"\n");
		
		
//		
		//creating person1 record
		
		Person1 person11 = new Person1();
		person11.setName(name);
		person11.setState(state);
		person11.setAge(age);
		person11.setGender(gender);
		
		System.out.println("**********Person1 RECORD********************");
		System.out.print(person11.toString() + "\n");
		
		System.out.println("**********Person1 RECORD********************");
		
		scan.close();
		
		
		
		

	}

	

}
