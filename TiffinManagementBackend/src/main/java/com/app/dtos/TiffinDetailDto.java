package com.app.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@ToString
public class TiffinDetailDto {

	private int tiffinId;
	private String tiffinName;
	private String tiffinImage;
	private int tiffinPrice;
	private String description;
	public int getTiffinId() {
		return tiffinId;
	}
	public void setTiffinId(int tiffinId) {
		this.tiffinId = tiffinId;
	}
	public String getTiffinName() {
		return tiffinName;
	}
	public void setTiffinName(String tiffinName) {
		this.tiffinName = tiffinName;
	}
	public String getTiffinImage() {
		return tiffinImage;
	}
	public void setTiffinImage(String tiffinImage) {
		this.tiffinImage = tiffinImage;
	}
	public int getTiffinPrice() {
		return tiffinPrice;
	}
	public void setTiffinPrice(int tiffinPrice) {
		this.tiffinPrice = tiffinPrice;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}

	
	
}
