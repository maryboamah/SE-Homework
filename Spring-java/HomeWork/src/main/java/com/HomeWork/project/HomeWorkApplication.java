package com.HomeWork.project;

import java.time.Month;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;



@SpringBootApplication
public class HomeWorkApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = 	SpringApplication.run(HomeWorkApplication.class, args);
		
		Insurance insurance1 = context.getBean(Insurance.class);
		insurance1.setInsuranceName("State Farm");
		insurance1.setInsuranceAgentName("Michael");
		insurance1.setMontlyPremium(250);
		
		//owner instance
		HomeOwners owner1 = context.getBean(HomeOwners.class);
		owner1.setHomeOwnerAssociationFee(200);
		owner1.setMontlyPayment(1500);
		owner1.setOwnerName("Merchant");
		owner1.setOwnerAge(35);
		owner1.setOwnerLocation("Columbus");
		owner1.setYearsOfBuyingHouse(20);
		owner1.setInsurance(insurance1);
		owner1.getInsurance().setEndDate("2023-04-19");
		owner1.getInsurance().setStartDate("2022-04-19");
		insurance1.getDurationOfInsurance();
		
		
		//renter instance
		
		Renters tenant1 = context.getBean(Renters.class);
		tenant1.setRenterName("Clifford");
		tenant1.setYearsOfRenting(20);
		tenant1.setMonthlyRent(1000);
		tenant1.setRenterAge(34);
		tenant1.setRenterLocation("Columbus");
		tenant1.setInsurance(insurance1);
		tenant1.getInsurance().setEndDate("2024-04-19");
		tenant1.getInsurance().setStartDate("2021-04-19");
		
		tenant1.getInsurance().getDurationOfInsurance();
		
		
		
		owner1.getInsurance().getDurationOfInsurance();
		
		owner1.homeOwnerDetails(owner1);
		owner1.totalPaymentOverTheYears();
		tenant1.rentersDetails(tenant1);
		tenant1.totalPaymentOverTheYears();
		
		
		
		
		
	}

}
