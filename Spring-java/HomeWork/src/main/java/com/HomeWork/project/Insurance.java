package com.HomeWork.project;

import java.text.SimpleDateFormat;
import java.time.Period;
import java.util.Date;
import java.time.LocalDate;
import java.time.Month;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component

//create more instances
@Scope(value="prototype")
public class Insurance {
	private String insuranceName;
	private String insuranceAgentName;
	private double montlyPremium;
	private  LocalDate startDate;
	private LocalDate endDate ;

	public Insurance() {
		
		
		// TODO Auto-generated constructor stub
	}

	

	public String getInsuranceName() {
		return insuranceName;
	}

	public void setInsuranceName(String insuranceName) {
		this.insuranceName = insuranceName;
	}

	public String getInsuranceAgentName() {
		return insuranceAgentName;
	}

	public void setInsuranceAgentName(String insuranceAgentName) {
		this.insuranceAgentName = insuranceAgentName;
	}

	public double getMontlyPremium() {
		return montlyPremium;
	}

	public void setMontlyPremium(double montlyPremium) {
		this.montlyPremium = montlyPremium;
	}

	
	
	
	

	
	public LocalDate getStartDate() {
		return startDate;
	}



	public  void  setStartDate(String startDate) {
		LocalDate date = LocalDate.parse(startDate).withDayOfMonth(1);
		this.startDate =date;
	}



	public LocalDate getEndDate() {
		return endDate;
	}



	public void setEndDate(String endDate) {
		LocalDate date = LocalDate.parse(endDate).withDayOfMonth(1);
		
		this.endDate = date;
	}



	public String insuranceDetails() {
		String details =  "Insurance [insuranceName=" + insuranceName + ", insuranceAgentName=" + insuranceAgentName
				+ ", montlyPremium=" + montlyPremium + ", startDate=" + startDate + ", endDate=" + endDate + "]"
	;
		return details;
	}
	
	
	public void getDurationOfInsurance() {
		Period timeFrame = Period.between( this.getStartDate(),  this.getEndDate());
		 int years = timeFrame.getYears();
	        int months = timeFrame.getMonths();
		System.out.println("The duration of your insurance is " + years + "  year(s) and  " + months +" month(s).\n");
	}
	

}
