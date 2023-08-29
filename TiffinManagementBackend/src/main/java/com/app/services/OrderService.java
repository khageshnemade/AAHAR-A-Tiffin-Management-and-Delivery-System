package com.app.services;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.OrderDao;
import com.app.dao.TiffinDetailDao;
import com.app.dao.UserDao;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.OrderDto;
import com.app.dtos.TiffinDetailDto;
import com.app.entities.Order;
import com.app.entities.TiffinDetail;
import com.app.entities.User;

@Transactional
@Service
public class OrderService {

	@Autowired
	private OrderDao orderDao;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private TiffinDetailDao tiffinDao;
	@Autowired
	private UserDao userDao;

	public OrderDto findOrderById(int orderId) {
		Order order = orderDao.findByOrderId(orderId);
		return converter.toOrderDto(order);
	}

	public OrderDto AddOrder(OrderDto userOrderDto) {
		// following line needs to be checked again
		// userOrderDto.setTiffinId(userOrderDto.getTiffinId());
		Order order = converter.userOrderToOrder(userOrderDto);

		order = orderDao.save(order);
		return converter.toOrderDto(order);
	}
	public boolean isOrderForTiffinId(int tiffinId) {
		TiffinDetail tiffin = tiffinDao.findByTiffinId(tiffinId);
		int count = orderDao.findByTiffinDetails(tiffin).size();
		if(count > 0) {
			return true;
		}
		else
			return false;
	}
}
