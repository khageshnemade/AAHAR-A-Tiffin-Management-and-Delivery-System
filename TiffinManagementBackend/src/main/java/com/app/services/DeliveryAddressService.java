package com.app.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DeliveryAddressDao;
import com.app.dao.UserAddressDao;
import com.app.dtos.DeliveryAddressDto;
import com.app.dtos.DtoEntityConverter;
import com.app.entities.DeliveryAddress;

@Transactional
@Service
public class DeliveryAddressService {

	@Autowired
	DeliveryAddressDao deliveryAddressDao;
	@Autowired
	DtoEntityConverter converter;
	@Autowired
	UserAddressDao userAddressDao;
	
	public DeliveryAddressDto findByLocationId(int locationId) {
		DeliveryAddress deliveryAddress = deliveryAddressDao.findByLocationId(locationId);
		return converter.toDeliveryAddressDto(deliveryAddress);
	}
	public Map<String, Object> addDeliveryAddress(DeliveryAddressDto dto){
	       DeliveryAddress entity = converter.toDeliveryAddress(dto);
	       entity = deliveryAddressDao.save(entity);
	       return Collections.singletonMap("InsertedId", entity.getLocationId());
	   }
	public List<DeliveryAddressDto> findAll() {
		List<DeliveryAddress> list = deliveryAddressDao.findAll();
		List<DeliveryAddressDto> delDto = new ArrayList<DeliveryAddressDto>();
		for (DeliveryAddress adr : list) {
			DeliveryAddressDto dto = converter.toDeliveryAddressDto(adr);
			delDto.add(dto);
		}
		return delDto;
	}
}
