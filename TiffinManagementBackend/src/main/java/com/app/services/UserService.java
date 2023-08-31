package com.app.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserDao;
import com.app.dtos.Credential;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.UserDto;
import com.app.entities.User;

@Transactional
@Service
public class UserService {

	@Autowired
	private UserDao userDao;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private PasswordEncoder passwardencoder;
	@Autowired
	private DtoEntityConverter Converter;

	public UserDto findUserById(int userId) {
		User user = userDao.findByUserId(userId);
		return converter.toUserDto(user);
	}

	public UserDto findUserByEmail(String email) {
		User user = userDao.findByEmail(email);
		return converter.toUserDto(user);
	}

	public UserDto findUserByEmailAndPassword(Credential cred) {
		User user = userDao.findByEmail(cred.getEmail());
		String rawpassword = cred.getPassword();
		System.out.println(cred);
		if (user != null && passwardencoder.matches(rawpassword, user.getPassword())) {
			return converter.toUserDto(user);
		}
		return null;
	}

	public User AddUser(UserDto userdto) {
		String rawpassword = userdto.getPassword();
		System.out.println(rawpassword);
		String encrpassword = passwardencoder.encode(rawpassword);
		userdto.setPassword(encrpassword);
		User newUser = userDao.save(Converter.UserDtotoUser(userdto));
		return newUser;
	}

	public List<UserDto> DeliveryBoysList() {
		List<User> list = userDao.findAll();
		List<UserDto> dlist = new ArrayList<UserDto>();
		for (User u : list) {
			if (u.getRole().equals("ROLE_DELIVERYBOY"))
				dlist.add(Converter.toUserDto(u));
		}
		return dlist;
	}

	public User DeleteUser(int userId) {
		User u = userDao.findByUserId(userId);
		System.out.println(u);
		userDao.delete(u);
		return u;
	}

	public List<UserDto> getAllCustomers() {
		List<User> users = userDao.findAll();
		List<UserDto> userlist = new ArrayList<UserDto>();
		for (User u : users) {
			if (u.getRole().equals("ROLE_USER")) {
				userlist.add(Converter.toUserDto(u));
			}
		}
		return userlist;
	}

	public Map<String, Object> editUser(int userId, UserDto dto) {
		User user = userDao.findByUserId(userId);
		user.setUserName(dto.getUserName());
		user.setEmail(dto.getEmail());
		user.setPhone(dto.getPhone());
		user.setRole(dto.getRole());
		user.setAadharNo(dto.getAadharNo());
		user = userDao.save(user);
		return Collections.singletonMap("userChanged", 1);
	}

	public List<String> getUserRoles() {
		List<String> list = userDao.findDistinctRole();
		return list;
	}
}
