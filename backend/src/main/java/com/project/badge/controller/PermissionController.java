package com.project.badge.controller;

import com.project.badge.model.Permission;
import com.project.badge.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/permissions")
@CrossOrigin(origins = "http://localhost:4200") // مهم لـ CORS
public class PermissionController {

    @Autowired
    private PermissionService permissionService;

    @GetMapping
    public List<Permission> getAllPermission() {
        return permissionService.getAllPermission();
    }

    @GetMapping("/{id}")
    public Optional<Permission> getPermissionById(@PathVariable Long id) {
        return permissionService.getPermissionById(id);
    }

    @PostMapping
    public Permission createpermission(@RequestBody Permission permission) {
        return permissionService.createpermission(permission);
    }

    @DeleteMapping("/{id}")
    public void deletepermission(@PathVariable Long id) {
        permissionService.deletepermission(id);
    }
}
