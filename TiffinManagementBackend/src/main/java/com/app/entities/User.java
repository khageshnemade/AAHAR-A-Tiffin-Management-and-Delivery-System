package com.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")

@ToString(exclude = { "orderList", "daywiseOrder", "userAddress" })
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "user_id")
	private int userId;

	@Column(name = "user_name")
	private String userName;
	
	@Column(unique = true,nullable = false)
	private String email;

	private String password;

	private String phone;

	private String role;

	@Column(name = "aadhar_no")
	private String aadharNo;

	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Order> orderList;

	@OneToMany(mappedBy = "deliveryBoy")
	private List<DaywiseOrder> daywiseOrder;

	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private List<UserAddress> userAddresses;


	
	
	public User(int id) {
		this.userId = id;
	}



	



	public User() {
		super();
	}







	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
	}



	public String getUserName() {
		return userName;
	}



	public void setUserName(String userName) {
		this.userName = userName;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getPhone() {
		return phone;
	}



	public void setPhone(String phone) {
		this.phone = phone;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public String getAadharNo() {
		return aadharNo;
	}



	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}



	public List<Order> getOrderList() {
		return orderList;
	}



	public void setOrderList(List<Order> orderList) {
		this.orderList = orderList;
	}



	public List<DaywiseOrder> getDaywiseOrder() {
		return daywiseOrder;
	}



	public void setDaywiseOrder(List<DaywiseOrder> daywiseOrder) {
		this.daywiseOrder = daywiseOrder;
	}







	public List<UserAddress> getUserAddresses() {
		return userAddresses;
	}







	public void setUserAddresses(List<UserAddress> userAddresses) {
		this.userAddresses = userAddresses;
	}



	
	
	
}
