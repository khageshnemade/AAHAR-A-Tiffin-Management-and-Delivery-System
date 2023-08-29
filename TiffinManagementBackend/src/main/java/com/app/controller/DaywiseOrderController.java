package com.app.controller;

import java.text.ParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.DaywiseOrderDto;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.Response;
import com.app.services.DaywiseOrderService;
import com.fasterxml.jackson.databind.node.ObjectNode;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/daywiseOrder")
public class DaywiseOrderController {

	@Autowired
	private DaywiseOrderService daywiseOrderService;

	@GetMapping("/{id}")
	public ResponseEntity<?> displayDaywiseOrders(@PathVariable("id") int id) {
		DaywiseOrderDto daywiseOrderDto = daywiseOrderService.findByDoId(id);
		return Response.success(daywiseOrderDto);
	}

	@PostMapping("/addOrder")
	public ResponseEntity<?> Addorder(@RequestBody DaywiseOrderDto daywiseorder) {

		DaywiseOrderDto daywiseOrderdto = daywiseOrderService.addDaywise(daywiseorder);
		return Response.success(daywiseOrderdto);

	}

	@GetMapping("/todaysOrders")
	public ResponseEntity<?> getTodaysOrders() {
		try {
			return Response.success(daywiseOrderService.addDaywiseOrder());
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	@GetMapping("/getAll")
	public ResponseEntity<?> getAll() {
		return Response.success(daywiseOrderService.GetALLOrders());
	}

	@GetMapping("/countpending")
	public ResponseEntity<?> getpendingCount() {
//		HashMap<Integer, V>
		return Response.success(daywiseOrderService.Countpending());
	}

	@GetMapping("/countDispatched")
	public ResponseEntity<?> getDispatched() {
//		HashMap<Integer, V>
		return Response.success(daywiseOrderService.CountDispatched());
	}

	@GetMapping("/countDelivered")
	public ResponseEntity<?> getDelivered() {
//		HashMap<Integer, V>
		return Response.success(daywiseOrderService.CountDelivered());
	}

	@PostMapping("/ListOfOrders")
	public ResponseEntity<?> listdes() {
		return Response.success(daywiseOrderService.TotaltodaysPendingOrderList());
	}

	@GetMapping("/ListOfDispatched")
	public ResponseEntity<?> listDispatched() {
		return Response.success(daywiseOrderService.TotaltodaysDispatchedOrders());
	}

	@GetMapping("/ListOfDelivered")
	public ResponseEntity<?> listDelivered() {
		return Response.success(daywiseOrderService.TotaltodaysDeliveredOrders());
	}

	@GetMapping("/DeliveryBoysList")
	public ResponseEntity<?> DeliveryBoysList() {
		return Response.success(daywiseOrderService.getDeliveryBoys());
	}

	@PostMapping("/dispatchOrder")
	public ResponseEntity<?> dispatchOrders(@RequestBody ObjectNode objectNode) {
		System.out.println("helo");
		String userId = objectNode.get("userId").asText();
		String Do_id = objectNode.get("do_id").asText();
		System.out.println("doid " + userId);
		return Response.success(daywiseOrderService.DispatchOrder(userId, Do_id));

	}

	

}
