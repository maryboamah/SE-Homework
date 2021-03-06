package com.HomeWork.project;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;


//create instance
@Component
//create more instances
@Scope(value="prototype")
public class HomeOwners {
	
	private String ownerName;
	private String ownerLocation;
	private double montlyPayment;
	private int ownerAge;
	private double homeOwnerAssociationFee;
	private int yearsOfBuyingHouse;
	
	@Autowired
	
	private Insurance insurance;
	

	public HomeOwners() {
		// TODO Auto-generated constructor stub
	}


	public String getOwnerName() {
		return ownerName;
	}


	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}


	public String getOwnerLocation() {
		return ownerLocation;
	}


	public void setOwnerLocation(String ownerLocation) {
		this.ownerLocation = ownerLocation;
	}


	public double getMontlyPayment() {
		return montlyPayment;
	}


	public void setMontlyPayment(double montlyPayment) {
		this.montlyPayment = montlyPayment;
	}


	public int getOwnerAge() {
		return ownerAge;
	}


	public void setOwnerAge(int ownerAge) {
		this.ownerAge = ownerAge;
	}


	public double getHomeOwnerAssociationFee() {
		return homeOwnerAssociationFee;
	}


	public void setHomeOwnerAssociationFee(double homeOwnerAssociationFee) {
		this.homeOwnerAssociationFee = homeOwnerAssociationFee;
	}


	public Insurance getInsurance() {
		return insurance;
	}


	public void setInsurance(Insurance insurance) {
		this.insurance = insurance;
	}


	
	
	
	public int getYearsOfBuyingHouse() {
		return yearsOfBuyingHouse;
	}


	public void setYearsOfBuyingHouse(int yearsOfBuyingHouse) {
		this.yearsOfBuyingHouse = yearsOfBuyingHouse;
	}


	public void homeOwnerDetails(HomeOwners homeowner) {
		System.out.println( "HomeOwners [ownerName=" + ownerName + ", ownerLocation=" + ownerLocation + ", montlyPayment="
				+ montlyPayment + ", ownerAge=" + ownerAge + ", homeOwnerAssociationFee=" + homeOwnerAssociationFee
				+ ", insurance=" + homeowner.getInsurance().insuranceDetails() + "]" + "\n"
	);
	}
	
	public void totalPaymentOverTheYears() {
		double years = (double)this.getYearsOfBuyingHouse();
		
		double totalPayment = ((this.getMontlyPayment() * 12) * years )  + ((12 * this.getInsurance().getMontlyPremium()) * years) + ((this.getHomeOwnerAssociationFee() * 12) * years);
		System.out.println(this.getOwnerName()+ ", you have spent over " + totalPayment + "in the past " + this.getYearsOfBuyingHouse() + "  years on your house" +"\n");
	}


	
	
	

}
