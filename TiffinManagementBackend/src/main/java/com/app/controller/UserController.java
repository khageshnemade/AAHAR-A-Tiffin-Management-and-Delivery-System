package com.app.controller;

import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.Response;
import com.app.dtos.UserDto;
import com.app.services.UserAddressService;
import com.app.services.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;

	
	
	@Autowired(required = true)
	private ModelMapper mapper;

	@Autowired
	UserAddressService userAddressService;

	@GetMapping("/{id}")
	public ResponseEntity<?> displayUserById(@PathVariable("id") int id) {
		UserDto userDto = userService.findUserById(id);
		return Response.success(userDto);
	}

	@PutMapping("/edit")
	public ResponseEntity<?> editUser(@RequestBody UserDto dto) {
		Map<String, Object> result = userService.editUser(dto.getUserId(), dto);
		return Response.success(result);
	}

}
