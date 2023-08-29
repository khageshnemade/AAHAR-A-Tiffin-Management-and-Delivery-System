package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.User;

public interface UserDao extends JpaRepository<User, Integer> {

	User findByUserId(int userId);
	
	User findByEmail(String email);
	@Query("select distinct u.role from User u where u.role!='admin'")
	List<String> findDistinctRole();
	
	
}
