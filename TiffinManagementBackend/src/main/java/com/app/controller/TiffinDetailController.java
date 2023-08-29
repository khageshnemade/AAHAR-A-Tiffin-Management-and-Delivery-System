package com.app.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.DtoEntityConverter;
import com.app.dtos.Response;
import com.app.dtos.TiffinDetailDto;
import com.app.dtos.TiffinFormDto;
import com.app.entities.TiffinDetail;
import com.app.services.OrderService;
import com.app.services.StorageService;
import com.app.services.TiffinDetailService;

@CrossOrigin(origins = "*")
@RestController
public class TiffinDetailController {
	
	@Autowired
	private TiffinDetailService tiffinDetailService;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private StorageService storageService;
	@Autowired
	private OrderService orderService;
	
	@GetMapping("/tiffinDetail/{id}")
	public ResponseEntity<?> displayTiffinDetailById(@PathVariable("id") int id) {
		TiffinDetailDto tiffinDetailDto = tiffinDetailService.findTiffinById(id);
		return Response.success(tiffinDetailDto);
	}
	
	@GetMapping("/tiffin/details")
	public ResponseEntity<?> findAllTiffinDetails() {
		return Response.success(tiffinDetailService.findAllTiffins());
	}
	
	@PostMapping("/tiffin/addTiffin")
	public ResponseEntity<?> saveAlbum(TiffinFormDto tiffinDto) throws IOException {
		System.out.println(tiffinDto);
		TiffinDetail tiffin = converter.albumFormDtoToEntity(tiffinDto);
		String thumbnail = storageService.store(tiffinDto.getTiffinImage());
		tiffin.setTiffinImage(thumbnail);
		tiffinDetailService.saveTiffinDetails(tiffin);
		return Response.success(tiffin);
	}
	
	@PutMapping("/tiffin/updateTiffin/{id}")
	public ResponseEntity<?> updateTiffinById(@PathVariable("id") int id, @RequestBody TiffinDetailDto details) {
		TiffinDetail det = tiffinDetailService.findTiffinDetailById(id);
		System.out.println(details.getDescription());
		det.setTiffinName(details.getTiffinName());
//		//det.setTiffinImage(details.getTiffinImage());
		det.setTiffinPrice(details.getTiffinPrice());
		det.setDescription(details.getDescription());
		TiffinDetail result = tiffinDetailService.saveTiffinDetails(det);
		return Response.success(result);
		//return null;
	}
	
	@DeleteMapping("/tiffin/delete/{id}")
	public ResponseEntity<?> deleteTiffinById(@PathVariable("id") int id) {
		int count = tiffinDetailService.deleteTiffinById(id);
		return Response.success(count);
	}
	
	@GetMapping("/tiffin/order/{id}")
	public ResponseEntity<?> isOrderForTiffinId(@PathVariable("id") int id){
		boolean ispresent = orderService.isOrderForTiffinId(id);
		if(ispresent)
			return Response.error("Cannot Delete Tiffin : Tiffin is Assigned");
		else
			return Response.success("Tiffin Deleted Successfully");
	}
	
	
}
