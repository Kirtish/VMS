package com.ysoft.vms.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ysoft.vms.domain.Role;
import com.ysoft.vms.services.IRoleService;

@RestController
@RequestMapping(value = "/api/rest/role")
public class RoleController {
	
    
	private IRoleService roleService; 
	@Autowired	
	public RoleController(IRoleService roleService){
		this.roleService = roleService;
	}
	
	@RequestMapping(value="/",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List<Role> getRoles(){		
		return roleService.getRoles();
	}
	
	@RequestMapping(value="/save",method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)	
	public @ResponseBody Role save( @RequestBody Role role){
		System.out.println("In Save :"+ role.toString());
		return roleService.save(role);
		
	} 
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)	
	public @ResponseBody Role fetch( @PathVariable Long id){
		return roleService.getRole(id);
	} 
	
	@RequestMapping(value="/delete/{id}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)	
	public void delete(@PathVariable Long id){
		roleService.delete(id);
	}
	
	

}
