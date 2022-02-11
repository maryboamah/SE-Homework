package computer;

public class Computer {
	static int numberOfComputers = 0;
	private String name;
	private int year;
	private double cost;

	public Computer() {
		// TODO Auto-generated constructor stub
		numberOfComputers++;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public static int getNumberOfComputers() {
		return numberOfComputers;
	}
	

}
