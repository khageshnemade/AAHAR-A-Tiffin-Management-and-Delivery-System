package com.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
public class AuthResp {
	private String status;
	private String jwt;
	private String role;
	
	
	
	public AuthResp() {
		super();
	}



	public AuthResp(String status, String jwt, String role) {
		super();
		this.status = status;
		this.jwt = jwt;
		this.role = role;
	}



	public String getStatus() {
		return status;
	}



	public void setStatus(String status) {
		this.status = status;
	}



	public String getJwt() {
		return jwt;
	}



	public void setJwt(String jwt) {
		this.jwt = jwt;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}
	
	
	
}
