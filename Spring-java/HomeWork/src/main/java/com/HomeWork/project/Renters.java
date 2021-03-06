package com.HomeWork.project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;



@Component
public class Renters {
	private String renterName;
	private int renterAge;
	private String renterLocation;
	private double monthlyRent;
	private int yearsOfRenting;
	
	@Autowired
	private Insurance insurance;

	public Renters() {
		// TODO Auto-generated constructor stub
	}

	public String getRenterName() {
		return renterName;
	}

	public void setRenterName(String renterName) {
		this.renterName = renterName;
	}

	public int getRenterAge() {
		return renterAge;
	}

	public void setRenterAge(int renterAge) {
		this.renterAge = renterAge;
	}

	public String getRenterLocation() {
		return renterLocation;
	}

	public void setRenterLocation(String renterLocation) {
		this.renterLocation = renterLocation;
	}

	public double getMonthlyRent() {
		return monthlyRent;
	}

	public void setMonthlyRent(double monthlyRent) {
		this.monthlyRent = monthlyRent;
	}

	public Insurance getInsurance() {
		return insurance;
	}

	public void setInsurance(Insurance insurance) {
		this.insurance = insurance;
	}

	
	
	
	
	public int getYearsOfRenting() {
		return yearsOfRenting;
	}

	public void setYearsOfRenting(int yearsOfRenting) {
		this.yearsOfRenting = yearsOfRenting;
	}

	public void rentersDetails(Renters tenant) {
		System.out.println( "Renters [renterNameString=" + renterName + ", renterAge=" + renterAge + ", renterLocation="
				+ renterLocation + ", monthlyRent=" + monthlyRent + ", insurance=" + tenant.getInsurance().insuranceDetails() + "]" +"\n"
				);
	}
	
	public void totalPaymentOverTheYears() {
		double years = (double)this.getYearsOfRenting();
		
		double totalPayment = ((this.getMonthlyRent() * 12) * years )  + ((12 * this.getInsurance().getMontlyPremium()) * years) ;
		System.out.println(this.getRenterName() + ", you have spent over " + totalPayment + " in the past " + this.getYearsOfRenting() + " years on rent" +"\n" );
	}
	
	
	

}
