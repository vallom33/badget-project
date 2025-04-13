package com.project.badge.controller;

import com.project.badge.model.BadgeStatus;
import com.project.badge.service.BadgeStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/badgestatus")

public class BadgeStatusController{

    @Autowired
    private BadgeStatusService badgeStatusService;

    @GetMapping
    public List<BadgeStatus> getAllBadgeStatus(){
        return badgeStatusService.getAllBadgeStatus();
    }

    @GetMapping("/{id}")
    public Optional<BadgeStatus> getBadgeStatusById(@PathVariable  Long id){
        return badgeStatusService.getBadgeStatusById(id);

    }

    @PostMapping
    public BadgeStatus createbadgestatus(@RequestBody BadgeStatus badgeStatus){
        return badgeStatusService.createbadgestatus(badgeStatus);

    }
    @DeleteMapping("/{id}")
    public void deletebadgestatus(@PathVariable Long id){
        badgeStatusService.deletebadgestatus(id);
    }


}