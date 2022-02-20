package oopConcept;

import java.util.Arrays;

public class Student extends Person {
	
	static int studentCount = 0;
	
	
	

	
	
	public Student(String name, int age, char gender, boolean isMarried,String[] subjects ) {
		super(name, age, gender, isMarried, subjects);
		
		studentCount++;
		
	}

	//method for creating multiple students dynamically
// public static Student createPerson(Student student) {
//		
//		Student  studentVariable = new Student(student.name, student.age, student.gender, student.isMarried, student.subjects);
//		return studentVariable;
//	}

	public static String numberCount() {
		
		return "The number of students in" + collegeName + "is " + studentCount ;
	}
	
	public void whoAmI() {
		System.out.println("i am a Student of " + collegeName + ".\n I study " + Arrays.toString(this.subjects) +"\n" );
	}
	
	
}
