package com.project.badge.service;

import com.project.badge.model.Permission;
import com.project.badge.model.User;
import com.project.badge.repository.PermissionRepository;
import com.project.badge.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PermissionService {

    @Autowired
    private PermissionRepository permissionRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Permission> getAllPermission() {
        return permissionRepository.findAll();
    }

    public Optional<Permission> getPermissionById(Long id) {
        return permissionRepository.findById(id);
    }

    public Permission createpermission(Permission permission) {
        if (permission.getUser() != null && permission.getUser().getId() != null) {
            Optional<User> userOpt = userRepository.findById(permission.getUser().getId());
            userOpt.ifPresent(permission::setUser);
        }
        return permissionRepository.save(permission);
    }



    public void deletepermission(Long id) {
        permissionRepository.deleteById(id);
    }
}
