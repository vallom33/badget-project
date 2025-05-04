// src/main/java/com/project/badge/service/ProfileService.java
package com.project.badge.service;

import com.project.badge.model.Profile;
import java.util.List;
import java.util.Optional;

public interface ProfileService {
    List<Profile> getAllProfiles();
    Optional<Profile> getProfileById(Long id);
    Profile createProfile(Profile profile);
    Profile updateProfile(Long id, Profile profile);
    void deleteProfile(Long id);
}
