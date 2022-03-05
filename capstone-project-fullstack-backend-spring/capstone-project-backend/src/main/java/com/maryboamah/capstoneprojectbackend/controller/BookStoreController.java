package com.maryboamah.capstoneprojectbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maryboamah.capstoneprojectbackend.exception.ResourceNotFoundException;
import com.maryboamah.capstoneprojectbackend.model.Book;
import com.maryboamah.capstoneprojectbackend.repository.BookStoreRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class BookStoreController {
	@Autowired 
	
	private BookStoreRepository booksRepo;
	
@GetMapping("/allbooks")
public List<Book>getAllBooks(){
	return booksRepo.findAll();
}


@PostMapping("/addbook")
public Book neBook(@RequestBody Book bk) {
	return booksRepo.save(bk);
}

@GetMapping("/book/{id}")
public ResponseEntity<Book> getBookById(@PathVariable int id){
	Book bok = booksRepo.findById(id).orElseThrow(()-> new ResourceNotFoundException("Student Not found"));
	return ResponseEntity.ok(bok);
}


}
