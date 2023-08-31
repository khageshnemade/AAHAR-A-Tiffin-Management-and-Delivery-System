package com.app.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "daywise_orders")

@ToString(exclude = { "order", "deliveryBoy" })
public class DaywiseOrder {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "do_id")
	private int doId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column
	private Date date;

	@Column
	private int requirement;

	@Column
	private String status;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "order_id")
	private Order order;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "delivery_boy_id")
	private User deliveryBoy;
	
	
	

	public DaywiseOrder() {
		super();
	}

	public DaywiseOrder(Date date, int requirement, String status, Order order, User deliveryBoy) {
		super();
		this.date = date;
		this.requirement = requirement;
		this.status = status;
		this.order = order;
		this.deliveryBoy = deliveryBoy;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((order == null) ? 0 : order.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DaywiseOrder other = (DaywiseOrder) obj;
		if (order == null) {
			if (other.order != null)
				return false;
		} else if (!order.equals(other.order))
			return false;
		return true;
	}

	public int getDoId() {
		return doId;
	}

	public void setDoId(int doId) {
		this.doId = doId;
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

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public User getDeliveryBoy() {
		return deliveryBoy;
	}

	public void setDeliveryBoy(User deliveryBoy) {
		this.deliveryBoy = deliveryBoy;
	}	

	
	
	
}
