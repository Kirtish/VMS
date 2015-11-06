package com.ysoft.vms.services;

import java.util.List;

import com.ysoft.vms.domain.Role;

public interface IRoleService {
	
	public List<Role> getRoles();
	
	public Role getRole(Long id);
	
	public Role save(Role role);
	
	public Role delete(Long id);

}
