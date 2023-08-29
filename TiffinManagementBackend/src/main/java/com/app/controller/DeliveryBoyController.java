package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.Response;
import com.app.services.DaywiseOrderService;
import com.fasterxml.jackson.databind.node.ObjectNode;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/deliveryBoy")
public class DeliveryBoyController {

	@Autowired
	private DaywiseOrderService daywiseOrderService;

	@GetMapping("/orders/{id}")
	public ResponseEntity<?> getAllTodaysDeliveryDeliveryBoy(@PathVariable("id") int id) {
		System.out.println("userId  " + id);
		return Response.success(daywiseOrderService.getDeliveryDetailsforDeliveryBoy(id));
	}
	
	@PostMapping("/Delivered")
	public ResponseEntity<?> makeitDelivered(@RequestBody ObjectNode objectNode) {
		int do_id = Integer.parseInt(objectNode.get("do_id").asText());

		return Response.success(daywiseOrderService.DispatchedToDelivered(do_id));
	}
}
