package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.DeliveryAddress;

public interface DeliveryAddressDao extends JpaRepository<DeliveryAddress, Integer> {

	DeliveryAddress findByLocationId(int locationId);
}
