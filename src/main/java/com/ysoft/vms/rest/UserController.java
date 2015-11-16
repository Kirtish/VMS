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

import com.ysoft.vms.domain.User;
import com.ysoft.vms.services.IUserService;

@RestController
@RequestMapping("/api/rest/user")
public class UserController {

	@Autowired
	private IUserService userService; 
	
	@Autowired
	public UserController(IUserService userRepository){
		this.userService = userService;
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET,consumes=MediaType.APPLICATION_JSON_VALUE,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody User get(@PathVariable Long id){
		return userService.getUser(id);
	}
	
	@RequestMapping(value="/delete/{id}",method=RequestMethod.GET,consumes=MediaType.APPLICATION_JSON_VALUE,produces=MediaType.APPLICATION_JSON_VALUE)
	public void delete(@PathVariable Long id){
		userService.delete(id);
	}
	
	@RequestMapping(value="/save",method =RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody User save(@RequestBody User user){
		return userService.save(user);
	}
	
	@RequestMapping(value="/",method =RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List<User>get(){
		return userService.getUsers();
	}
	
}
