package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.UserAddress;

public interface UserAddressDao extends JpaRepository<UserAddress, Integer> {
	
	UserAddress findByAddressId(int addressId);
	@Query("select ua from UserAddress ua join fetch User u where u.email = ?1")
	UserAddress findByEmail(String email);
	UserAddress findByUserId(int userId);
}
