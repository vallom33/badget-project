package com.project.badge.controller;
import com.project.badge.model.Profile;
import com.project.badge.service.ProfileServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/profiles")
public class ProfileController {

    @Autowired
    private ProfileServiceImpl profileService;

    @GetMapping
    public List<Profile> getAllProfile(){
        return profileService.getAllProfile();
    }

    @GetMapping("/{id}")
    public Optional<Profile> getProfileById(@PathVariable Long id){
        return profileService.getProfileById( id);
    }

    @PostMapping
    public Profile createprofile(@RequestBody Profile profile){
        return profileService.createProfile(profile);
    }

    @PostMapping("/{id}")
    public void deleteprofile(@PathVariable Long id){
        profileService.deleteProfile(id);
    }

}
