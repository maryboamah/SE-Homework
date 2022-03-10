package com.marymary.capstoneproject.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="books")
public class Book {

	
	
	@Id
	private int booksId;
	@Column(name="book_title")
	private String title;
	private String author;
	private String genre;
	private String country;
	private String image;
	private double price;
	private String publisher;
	@Column(name="pub_year")
	private String pubYear;
	private int isbn;
	
	
	
	
	public Book(int booksId, String title, String author, String genre, String country, String image,
			double price, String publisher,String pubYear, int isbn) {
		super();
		this.booksId = booksId;
		this.title = title;
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



	
	public String getTitle() {
		return title;
	}



	public void setTitle(String title) {
		this.title = title;
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
	public String getPubYear() {
		return pubYear;
	}
	public void setPubYear(String pubYear) {
		this.pubYear = pubYear;
	}
	public int getIsbn() {
		return isbn;
	}
	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}



	public int getBooksId() {
		return booksId;
	}



	public void setBooksId(int booksId) {
		this.booksId = booksId;
	}
	
	
}
