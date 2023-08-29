package com.app.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.Response;
import com.app.dtos.UserDto;
import com.app.entities.User;
import com.app.services.DaywiseOrderService;
import com.app.services.UserService;
import com.fasterxml.jackson.databind.node.ObjectNode;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private UserService userService;

	@Autowired(required = true)
	private ModelMapper mapper;

	@Autowired
	private DaywiseOrderService daywiseOrderService;

	@GetMapping("/DeliveryBoys")
	public ResponseEntity<?> findalldeliveryBoys() {
		return Response.success(userService.DeliveryBoysList());
	}

	@DeleteMapping("/DeliveryBoys/Delete/{userId}")
	public ResponseEntity<?> deleteDeliveryboy(@PathVariable("userId") int userId) {
		System.out.println("userId : " + userId);
		User deletedUser = userService.DeleteUser(userId);
		System.out.println(deletedUser);
		UserDto deletedUDto = mapper.map(deletedUser, UserDto.class);
		return Response.success(deletedUDto);
	}

	@DeleteMapping("/customer/Delete/{userId}")
	public ResponseEntity<?> deleteCustomer(@PathVariable("userId") int userId) {
		System.out.println("userId : " + userId);
		User deletedUser = userService.DeleteUser(userId);
		System.out.println(deletedUser);
		UserDto deletedUDto = mapper.map(deletedUser, UserDto.class);
		return Response.success(deletedUDto);
	}

	@GetMapping("/CustomerList")
	public ResponseEntity<?> getAllCustomers() {
		return Response.success(userService.getAllCustomers());
	}	

	@GetMapping("/ActiveCutomers")
	public ResponseEntity<?> ActiveCutomersList() {
		return Response.success(daywiseOrderService.getAllActiveUsers());
	}
}
