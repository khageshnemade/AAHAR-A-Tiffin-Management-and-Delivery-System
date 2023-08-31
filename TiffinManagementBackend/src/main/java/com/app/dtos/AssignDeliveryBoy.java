package com.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
public class AssignDeliveryBoy {
	private int do_id;
	private String userName;
	private int OrderId;
	private String user_address;
	private String area;
	private String city;
	private int pincode;
	
	
	
	
	public AssignDeliveryBoy() {
		super();
	}




	public AssignDeliveryBoy(int do_id, String userName, int orderId, String user_address, String area, String city,
			int pincode) {
		super();
		this.do_id = do_id;
		this.userName = userName;
		OrderId = orderId;
		this.user_address = user_address;
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}




	public int getDo_id() {
		return do_id;
	}




	public void setDo_id(int do_id) {
		this.do_id = do_id;
	}




	public String getUserName() {
		return userName;
	}




	public void setUserName(String userName) {
		this.userName = userName;
	}




	public int getOrderId() {
		return OrderId;
	}




	public void setOrderId(int orderId) {
		OrderId = orderId;
	}




	public String getUser_address() {
		return user_address;
	}




	public void setUser_address(String user_address) {
		this.user_address = user_address;
	}




	public String getArea() {
		return area;
	}




	public void setArea(String area) {
		this.area = area;
	}




	public String getCity() {
		return city;
	}




	public void setCity(String city) {
		this.city = city;
	}




	public int getPincode() {
		return pincode;
	}




	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	
	
	
}
