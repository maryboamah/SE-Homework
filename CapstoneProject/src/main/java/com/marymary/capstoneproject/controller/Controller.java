package com.marymary.capstoneproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import com.marymary.capstoneproject.exception.ResourceNotFoundException;
import com.marymary.capstoneproject.model.Book;
import com.marymary.capstoneproject.model.User;
import com.marymary.capstoneproject.repository.BookRepository;
import com.marymary.capstoneproject.repository.UserRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController

@RequestMapping("/")
public class Controller {
	
@Autowired 
	
	private BookRepository booksRepo;

@Autowired
private UserRepository userRepo;


	
@GetMapping("/allbooks")
public List<Book>getAllBooks(){
	return booksRepo.findAll();
}




@PostMapping("/addbook")
public Book newBook(@RequestBody Book bk) {
	return booksRepo.save(bk);
}



@GetMapping("/user")
public List<User>getAllUsers(@PathVariable String name){
	
	return userRepo.findAll();
	
}




@GetMapping("/book/{id}")
public ResponseEntity<Book> getBookById(@PathVariable int id){
	Book bok = booksRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Book Not found"));
	return ResponseEntity.ok(bok);
}

@GetMapping("/bookbyauthor/{author}")
public List<Book> getBooByAuthor(@PathVariable String author){
	List<Book> books = booksRepo.findByAuthor(author);
	if(books.isEmpty()) {
		System.out.println(new ResourceNotFoundException("No Book written by " + author + " was found") );
	}
	return booksRepo.findByAuthor(author);
}

@GetMapping("/bookbytitle/{title}")
public List<Book> getBooByTitle(@PathVariable String title){
	List<Book> books = booksRepo.findByAuthor(title);
	if(books.isEmpty()) {
		System.out.println(new ResourceNotFoundException("No Book with title  " + title + " was found") );
	}
	return booksRepo.findByAuthor(title);
}


@GetMapping("/bookbygenre/{genre}")
public List<Book> getBooByGenre(@PathVariable String genre){
	List<Book> books = booksRepo.findByAuthor(genre);
	if(books.isEmpty()) {
		System.out.println(new ResourceNotFoundException(" No Book with genre " + genre + " was found") );
	}
	return booksRepo.findByAuthor(genre);
}






@PutMapping("/updatebook/{id}")
public ResponseEntity<Book> updateBook(@PathVariable int id, @RequestBody Book book){
	Book bk = booksRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Book Not Found"));
	
	bk.setAuthor(book.getAuthor());
	bk.setTitle(book.getTitle());
	bk.setCountry(book.getCountry());
	bk.setGenre(book.getGenre());
	bk.setImage(book.getImage());
	bk.setIsbn(book.getIsbn());
	bk.setPrice(book.getPrice());
	bk.setPublisher(book.getPublisher());
	bk.setPubYear(book.getPubYear());
	Book updatedBook = booksRepo.save(bk);
	return ResponseEntity.ok(updatedBook);
}

@DeleteMapping("/deletebook/{id}")
public String deleteBook(@PathVariable int id) {
	booksRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("Book not found"));
	booksRepo.deleteById(id);
	return "The book with ID: " + id + "is removed from database";
	
}





}
