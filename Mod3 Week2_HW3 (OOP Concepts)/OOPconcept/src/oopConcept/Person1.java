package oopConcept;

import java.util.Arrays;

public class Person1 {
	
	private String name;
	private  int age;
	private char gender;
	private String State;

	public Person1() {
		// TODO Auto-generated constructor stub
	}
	
	public Person1(String name, int age, char gender, String state) {
		// TODO Auto-generated constructor stub
		this.name = name;
		this.age = age;
		this.State=state;
		this.gender = gender;
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public char getGender() {
		return gender;
	}

	public void setGender(char gender) {
		this.gender = gender;
	}

	public String getState() {
		return State;
	}

	public void setState(String state) {
		State = state;
	}
	
	 public String toString(){
		 return  "Name: " + this.name + "\n"
		         + "Age: " + this.age + "\n"

		         + "Gender: " + this.gender + "\n";
		         
//		         + "Type of Person: " + isEmployeeOrStudent(null) + "\n"

		     
		     
	 }
	
	
	

}
