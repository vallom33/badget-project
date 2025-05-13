// src/main/java/com/project/badge/service/ProfileServiceImpl.java
package com.project.badge.service;

import com.project.badge.model.Profile;
import com.project.badge.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;



import java.util.List;
import java.util.Optional;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private ProfileRepository repo;

    @Override
    public Page<Profile> getProfiles(Pageable pageable) {
        return repo.findAll(pageable);
    }

    @Override
    public List<Profile> getAllProfiles() {
        return repo.findAll();
    }

    @Override
    public Optional<Profile> getProfileById(Long id) {
        return repo.findById(id);
    }

    @Override
    public Profile createProfile(Profile profile) {
        return repo.save(profile);
    }

    @Override
    public Profile updateProfile(Long id, Profile profile) {
        return repo.findById(id).map(existing -> {
            existing.setLibelle(profile.getLibelle());
            existing.setNni(profile.getNni());
            existing.setPhone(profile.getPhone());
            existing.setPhotoUrl(profile.getPhotoUrl());
            existing.setUser(profile.getUser());
            return repo.save(existing);
        }).orElseThrow(() -> new RuntimeException("Profile not found"));
    }

    @Override
    public void deleteProfile(Long id) {
        repo.deleteById(id);
    }
}
