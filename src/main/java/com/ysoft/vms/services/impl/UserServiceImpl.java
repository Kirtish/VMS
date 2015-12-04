package com.ysoft.vms.services.impl;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.ysoft.vms.domain.User;
import com.ysoft.vms.repositories.UserRepository;
import com.ysoft.vms.services.IUserService;

@Service
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> getUsers() {
		List<User> users = new ArrayList<User>();
		Iterator<User> userItr = userRepository.findAll().iterator();
		while(userItr.hasNext())
			users.add(userItr.next());
		return users;
	}

	@Override
	public User getUser(Long id) {
		return userRepository.findOne(id);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public User save(User user) {
		return userRepository.save(user);
	}

	@Transactional(propagation = Propagation.REQUIRED)
	@Override
	public User delete(Long id) {
		User user = getUser(id);
		userRepository.delete(user);
		return user;
	}

}
