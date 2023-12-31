package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Facility;
import com.example.demo.entities.Owner;
import com.example.demo.entities.Property;
import com.example.demo.repositories.PropertyRepository;

@Service
public class PropertyService {
	
	@Autowired
	PropertyRepository prepo;
	
	public Property save(Property p)
	{
		return prepo.save(p);
	}
	public List<Property> getAll()
	{
		return prepo.findAll();
	}
	
	public boolean upload(int id,byte[] photo)
	{
		if(prepo.uploadPhoto(id, photo)==1)
			return true;
		else 
		{
			return false;
		}
	}
	
	public List<Property> getbyAreaId(int id)
	{
		return prepo.getbyareaid(id);
	}
	
	public List<Property> getbyCityId(int id)
	{
		return prepo.getbycityid(id);
	}
	
	public String getPropertyTypeNameByPropertyId(int propertyId) 
	{
        return prepo.findPropertyTypeNameByPropertyId(propertyId);
    }
	
	 public void deletePropertyById(int id) 
	 {
	        prepo.deleteById(id);
	 }
	 
	 public List<Property> getPropertiesByOwnerId(int id)
	 {
	        return prepo.findByOwner_id(id);
	 }


	
	
}
