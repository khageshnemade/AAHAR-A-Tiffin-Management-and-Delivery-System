package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.PaymentDto;
import com.app.dtos.Response;
import com.app.services.PaymentService;

@CrossOrigin(origins = "*")
@RestController
public class PaymentController {

	@Autowired
	private PaymentService paymentService;

	@GetMapping("/payment/{id}")
	public ResponseEntity<?> displayPayment(@PathVariable("id") int id) {
		PaymentDto paymentDto = paymentService.findByTransactionId(id);
		return Response.success(paymentDto);
	}

	@PostMapping("/payment")
	public ResponseEntity<?> savePayment(@RequestBody PaymentDto paymentDto) {
		PaymentDto dto = paymentService.savePaymentDetails(paymentDto);
		return Response.success(dto);
	}
}
