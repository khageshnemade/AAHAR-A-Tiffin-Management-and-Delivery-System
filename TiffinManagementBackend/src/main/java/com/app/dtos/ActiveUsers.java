package com.app.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@ToString
public class ActiveUsers {
	
	private int userId;
	private String userName;
	@Temporal(TemporalType.TIMESTAMP)
	private Date startDate;
	@Temporal(TemporalType.TIMESTAMP)
	private Date endDate;
	private int totalDays;
	private int totalAmount;
	private int tiffinId;
	
	public ActiveUsers() {
		super();
	}

	public ActiveUsers(int userId, String userName, Date startDate, Date endDate, int totalDays, int totalAmount,
			int tiffinId) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.totalDays = totalDays;
		this.totalAmount = totalAmount;
		this.tiffinId = tiffinId;
	}

	
	
	
	
	
}
