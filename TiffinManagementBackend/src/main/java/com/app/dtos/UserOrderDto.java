package com.app.dtos;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@ToString
public class UserOrderDto {

	private int order_id;
	private int user_id;
	private Date start_date;
	private Date end_date;
	private int total_days;
	private int total_amount;
	private int tiffin_id;

}
