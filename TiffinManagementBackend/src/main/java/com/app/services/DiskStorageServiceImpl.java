package com.app.services;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

@Component
public class DiskStorageServiceImpl implements StorageService {
	@Value("${disk.upload.basepath}")
	private String BASEPATH;

	
	@Override
	public List<String> loadAll() {
		File dirPath = new File("images");
		return Stream.of(dirPath.list()).collect(Collectors.toList());
	}

	@Override
	public String store(MultipartFile file) {
		String fileName = file.getOriginalFilename();
		File dir=new File("images");
		if(! dir.isDirectory()) {
			dir.mkdir();
		}
		File filePath = new File("images", fileName);
		try(FileOutputStream out = new FileOutputStream(filePath)) {
			FileCopyUtils.copy(file.getInputStream(), out);
			return fileName;
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}

	@Override
	public Resource load(String fileName) {
		File filePath = new File("images", fileName);
		System.out.println("Loading file: " + filePath.getAbsolutePath());
		if(filePath.exists())
			return new FileSystemResource(filePath);
		return null;
	}

	@Override
	public void delete(String fileName) {
		File filePath = new File("images", fileName);
		if(filePath.exists())
			filePath.delete();
	}

}
