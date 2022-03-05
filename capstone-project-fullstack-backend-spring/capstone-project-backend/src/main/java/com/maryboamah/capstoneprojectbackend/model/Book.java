package com.maryboamah.capstoneprojectbackend.model;

import java.sql.Date;

import javax.persistence.Entity;

import org.hibernate.annotations.Table;

@Entity

public class Book {
	private int booksId;
	private String bookTitle;
	private String author;
	private String genre;
	private String country;
	private String image;
	private double price;
	private String publisher;
	private Date pubYear;
	private int isbn;
	
	
	
	
	public Book(int booksId, String bookTitle, String author, String genre, String country, String image,
			double price, String publisher, Date pubYear, int isbn) {
		super();
		this.booksId = booksId;
		this.bookTitle = bookTitle;
		this.author = author;
		this.genre = genre;
		this.country = country;
		this.image = image;
		this.price = price;
		this.publisher = publisher;
		this.pubYear = pubYear;
		this.isbn = isbn;
	}
	
	
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}



	public String getBookTitle() {
		return bookTitle;
	}
	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public Date getPubYear() {
		return pubYear;
	}
	public void setPubYear(Date pubYear) {
		this.pubYear = pubYear;
	}
	public int getIsbn() {
		return isbn;
	}
	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}
	
	
	
	

}
