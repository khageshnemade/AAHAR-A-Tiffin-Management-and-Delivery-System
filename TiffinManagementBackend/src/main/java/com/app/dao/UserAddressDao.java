package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.UserAddress;

public interface UserAddressDao extends JpaRepository<UserAddress, Integer> {
	
	UserAddress findByAddressId(int addressId);
	@Query("select ua from UserAddress ua join fetch User u where u.email = ?1")
	UserAddress findByEmail(String email);
	
	@Query("SELECT ua FROM UserAddress ua JOIN ua.user u WHERE u.userId = ?1")
	List<UserAddress> findByUserId(int userId);

}
