package com.app.dtos;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.entities.TiffinDetail;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
public class TiffinFormDto {
	private int tiffinId;
	private String tiffinName;
	private int tiffinPrice;
	private MultipartFile tiffinImage;
	private String description;

	public static TiffinDetail toEntity(TiffinFormDto dto) {
		TiffinDetail entity = new TiffinDetail();
		BeanUtils.copyProperties(dto, entity, "imageName");
		return entity;
	}

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

	public int getTiffinPrice() {
		return tiffinPrice;
	}

	public void setTiffinPrice(int tiffinPrice) {
		this.tiffinPrice = tiffinPrice;
	}

	public MultipartFile getTiffinImage() {
		return tiffinImage;
	}

	public void setTiffinImage(MultipartFile tiffinImage) {
		this.tiffinImage = tiffinImage;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
