package com.project.badge.controller;

import com.project.badge.model.Profile;
import com.project.badge.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

@RestController
@RequestMapping("/profiles")
@CrossOrigin(origins = "http://localhost:4200")
public class ProfileController {

    @Autowired
    private ProfileService service;

    // ✅ دعم pagination مباشرة من /profiles
    @GetMapping
    public Page<Profile> getProfiles(Pageable pageable) {
        return service.getProfiles(pageable);
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
