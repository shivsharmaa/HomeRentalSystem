package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Property;
import com.example.demo.entities.PropertyType;
import com.example.demo.services.PropertyTypeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PropertyTypeController {
	
	@Autowired
	PropertyTypeService ptservice;
	
	@GetMapping("/getallpropertytype")
	public List<PropertyType> getAll()
	{
		return ptservice.getAll();
	}
	

}
