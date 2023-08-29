package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Order;
import com.app.entities.TiffinDetail;

public interface OrderDao extends JpaRepository<Order, Integer> {

	Order findByOrderId(int orderId);
	List<Order> findByTiffinDetails(TiffinDetail tiffin);
	
}
