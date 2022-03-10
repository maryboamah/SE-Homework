package com.marymary.capstoneproject.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marymary.capstoneproject.model.Book;


@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

	
	List<Book>findByAuthor(String author);
	List<Book>findByTitle(String title);
	List<Book>findByGenre(String genre);
}
