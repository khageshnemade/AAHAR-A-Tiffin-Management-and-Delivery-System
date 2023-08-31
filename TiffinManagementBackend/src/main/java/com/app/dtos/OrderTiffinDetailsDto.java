package com.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@ToString
public class OrderTiffinDetailsDto {

	private String Tiffinname;
	private int count;
	
	
	
	public OrderTiffinDetailsDto() {
		super();
	}
	
	
	
	public OrderTiffinDetailsDto(String tiffinname, int count) {
		super();
		Tiffinname = tiffinname;
		this.count = count;
	}



	public String getTiffinname() {
		return Tiffinname;
	}
	public void setTiffinname(String tiffinname) {
		Tiffinname = tiffinname;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}

	
	
}
