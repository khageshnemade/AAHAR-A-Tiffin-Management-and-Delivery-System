package com.app.dtos;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;

public class DaywiseOrderDto {

	private int doId;
	private int orderId;
	@Temporal(TemporalType.TIMESTAMP)
	private Date date;
	private int requirement;
	private String status;
	private int deliveryBoyId;
	
	public DaywiseOrderDto() {
		// TODO Auto-generated constructor stub
	}

	public DaywiseOrderDto(int doId, int orderId, Date date, int requirement, String status, int deliveryBoyId) {
		super();
		this.doId = doId;
		this.orderId = orderId;
		this.date = date;
		this.requirement = requirement;
		this.status = status;
		this.deliveryBoyId = deliveryBoyId;
	}

	public int getDoId() {
		return doId;
	}

	public void setDoId(int doId) {
		this.doId = doId;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getRequirement() {
		return requirement;
	}

	public void setRequirement(int requirement) {
		this.requirement = requirement;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getDeliveryBoyId() {
		return deliveryBoyId;
	}

	public void setDeliveryBoyId(int deliveryBoyId) {
		this.deliveryBoyId = deliveryBoyId;
	}

	@Override
	public String toString() {
		return "DaywiseOrderDto [doId=" + doId + ", orderId=" + orderId + ", date=" + date + ", requirement="
				+ requirement + ", status=" + status + ", deliveryBoyId=" + deliveryBoyId + "]";
	}
}
