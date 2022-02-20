package oopConcept;

import java.util.Arrays;

public class Employee extends Person  {
	
	int employeeId;
	static int employeeCount;
	
	

	public Employee(int employeeId, String name, int age, char gender, boolean isMarried, String[] subjects) {
	super(name, age, gender, isMarried, subjects);
	
	this.employeeId = employeeId;
	employeeCount++;
	}
	
	public void whoAmI() {
		System.out.println("i am an employee of " + collegeName + ".\n I teach " + Arrays.toString(this.subjects) );
	}
	
	public static String numberCount() {
		
		return "The number of employees in" + collegeName + "is " + employeeCount ;
	}

}
