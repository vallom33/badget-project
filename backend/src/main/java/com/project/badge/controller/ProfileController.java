// src/main/java/com/project/badge/controller/ProfileController.java
package com.project.badge.controller;

import com.project.badge.model.Profile;
import com.project.badge.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/profiles")
@CrossOrigin(origins = "http://localhost:4200")
public class ProfileController {

    @Autowired
    private ProfileService service;

    @GetMapping
    public List<Profile> listAll() {
        return service.getAllProfiles();
    }

    @GetMapping("/{id}")
    public Optional<Profile> getOne(@PathVariable Long id) {
        return service.getProfileById(id);
    }

    @PostMapping
    public Profile create(@RequestBody Profile p) {
        return service.createProfile(p);
    }

    @PutMapping("/{id}")
    public Profile update(@PathVariable Long id, @RequestBody Profile p) {
        return service.updateProfile(id, p);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteProfile(id);
    }
}
