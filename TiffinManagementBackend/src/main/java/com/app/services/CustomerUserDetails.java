package com.app.services;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.entities.User;

@SuppressWarnings("serial")
public class CustomerUserDetails implements UserDetails{

	private User authUserDetails;
	
	public CustomerUserDetails(User authUserDetails) {
		super();
		this.authUserDetails = authUserDetails;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		System.out.println(Arrays.asList("Role : "+new SimpleGrantedAuthority(authUserDetails.getRole())));
		return Arrays.asList(new SimpleGrantedAuthority(authUserDetails.getRole()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return authUserDetails.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return authUserDetails.getEmail();
	}
	
	public int getUserID(){
		return authUserDetails.getUserId();
	}
	
	public String getRole() {
		return authUserDetails.getRole();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
