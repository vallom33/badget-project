// ProfileService.java (interface)
package com.project.badge.service;

import com.project.badge.model.Profile;
import java.util.List;
import java.util.Optional;

public interface ProfileService {
    List<Profile> getAllProfile();
    Optional<Profile> getProfileById(Long id);
    Profile createProfile(Profile profile);
    void deleteProfile(Long id);
}