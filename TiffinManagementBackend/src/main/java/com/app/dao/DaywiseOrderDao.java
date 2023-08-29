package com.app.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.DaywiseOrder;
import com.app.entities.User;

public interface DaywiseOrderDao extends JpaRepository<DaywiseOrder, Integer>{
	

	DaywiseOrder findByDoId(int doId);

	List<DaywiseOrder> findByDeliveryBoy(User deliveryboy);
	
	List<DaywiseOrder> findByDateLessThan(Date date);

}
