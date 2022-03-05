package com.maryboamah.capstoneprojectbackend.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.maryboamah.capstoneprojectbackend.model.Book;

@Repository
public interface BookStoreRepository extends JpaRepository<Book, Integer> {
	
	List<Book>findByAuthor(String author);

}
