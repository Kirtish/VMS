package com.ysoft.vms.repositories;

import org.springframework.data.repository.CrudRepository;

import com.ysoft.vms.domain.User;


public interface UserRepository extends CrudRepository<User, Long>{

	public User findByEmail(String email);
}
