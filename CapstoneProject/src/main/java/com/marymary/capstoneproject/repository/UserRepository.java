package com.marymary.capstoneproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marymary.capstoneproject.model.Book;
import com.marymary.capstoneproject.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

}
