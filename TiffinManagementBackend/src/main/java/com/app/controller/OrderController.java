package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.OrderDto;
import com.app.dtos.Response;
import com.app.services.OrderService;

@CrossOrigin(origins="*")
@RestController
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@GetMapping("/admin/order/{id}")
	public ResponseEntity<?> displayOrdersByOrderId(@PathVariable("id") int id) {
		OrderDto orderDto = orderService.findOrderById(id);
		return Response.success(orderDto);
	}
	
	@PostMapping("/user/order/AddOrder")
	   public ResponseEntity<?> addOrder(@RequestBody OrderDto userDto){
		System.out.println(userDto);
	       OrderDto orderDto=orderService.AddOrder(userDto);
	       if(orderDto==null) System.out.println("something wrong");
	       return  Response.success(orderDto);
	   }
	
}
