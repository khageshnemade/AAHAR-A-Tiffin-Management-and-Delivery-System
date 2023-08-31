package com.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.app.filters.JWTRequestFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

	@Autowired
	private PasswordEncoder enc;
	
	@Autowired
	private JWTRequestFilter filter;

	@Bean
	public SecurityFilterChain configureAuthorization(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeRequests().antMatchers("/signin", "/signup", "/roles","/images/**").permitAll()
				.antMatchers("/admin/**","/daywiseOrder/**").hasRole("ADMIN")
				.antMatchers("/deliveryboy/**").hasRole("DELIVERYBOY")
				.antMatchers("/user/**").hasRole("USER")
				.antMatchers(HttpMethod.OPTIONS).permitAll() // only required for JS clients(React)
				.anyRequest().authenticated().and()
				.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
				.addFilterBefore(filter,UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}
	
	@Bean
	public AuthenticationManager authenticatonMgr(AuthenticationConfiguration config) throws Exception {
		return config.getAuthenticationManager();
	}

}