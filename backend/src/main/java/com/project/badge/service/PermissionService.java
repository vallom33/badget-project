package com.project.badge.service;
import com.project.badge.model.Permission;
import com.project.badge.repository.PermissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PermissionService{

    @Autowired
    private PermissionRepository permissionRepository;

    public List<Permission> getAllPermission(){
        return permissionRepository.findAll();
    }

    public Optional<Permission> getPermissionById(Long id){
        return permissionRepository.findById(id);

    }
    public Permission createpermission(Permission permission){
        return permissionRepository.save(permission);

    }
    public void deletepermission(Long id){
        permissionRepository.deleteById(id);
    }
}