package com.project.badge.service;
import com.project.badge.model.Profile;
import com.project.badge.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public List<Profile> getAllProfile(){
        return profileRepository.findAll();

    }
    public Optional<Profile> getProfileBYId(Long id){
        return profileRepository.findById(id);

    }

    public Profile createprofile(Profile profile){

        return profileRepository.save(profile);
    }
    public void deleteprofile(Long id){
        profileRepository.deleteById(id);
    }


}
