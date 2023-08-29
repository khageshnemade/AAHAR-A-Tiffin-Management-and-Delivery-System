package com.app.services;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserAddressDao;
import com.app.dao.UserDao;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.UserAddressDto;
import com.app.entities.UserAddress;
@Transactional
@Service
public class UserAddressService {

	@Autowired
	UserAddressDao userAddressDao;
	@Autowired
	DtoEntityConverter converter;
	@Autowired
	UserDao userDao;
	
	
	
	public UserAddressDto findByUserId(int userId) {
		UserAddress userAddress = userAddressDao.findByUserId(userId);
		if(userAddress==null) return null;
		return converter.toUserAddressDto(userAddress);
	}
	
	public Map<String, Object> addUserAddress(UserAddressDto dto){
		UserAddress entity = converter.toUserAddress(dto);
		entity = userAddressDao.save(entity);
		return Collections.singletonMap("InsertedId", entity.getAddressId());
	}
}
