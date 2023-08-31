package com.app.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.services.StorageService;

@CrossOrigin
@RestController
public class FileControllerImpl {
	@Autowired
	private StorageService storageService;

	@RequestMapping(value = "/images/{fileName}", produces = "image/*")
	public void downloadFile(@PathVariable("fileName") String fileName, HttpServletResponse resp) throws IOException {

		try (FileInputStream in = new FileInputStream(new File("images", fileName))) {
			FileCopyUtils.copy(in, resp.getOutputStream());
		}

		Resource resource = storageService.load(fileName);
		FileCopyUtils.copy(resource.getInputStream(), resp.getOutputStream());
	}

}
