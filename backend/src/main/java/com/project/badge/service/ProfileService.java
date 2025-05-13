// src/main/java/com/project/badge/service/ProfileService.java
package com.project.badge.service;

import com.project.badge.model.Profile;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface ProfileService {
    List<Profile> getAllProfiles();
    Optional<Profile> getProfileById(Long id);
    Profile createProfile(Profile profile);
    Profile updateProfile(Long id, Profile profile);
    Page<Profile> getProfiles(Pageable pageable);
    void deleteProfile(Long id);
}
