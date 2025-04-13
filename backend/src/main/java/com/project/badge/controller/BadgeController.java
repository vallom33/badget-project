package com.project.badge.controller;

import com.project.badge.model.Badge;
import com.project.badge.service.BadgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/badges")

public class BadgeController{

    @Autowired
    private BadgeService badgeService;

    @GetMapping
    public List<Badge> getAllBadge(){
        return badgeService.getAllBadge();
    }

    @GetMapping("/{id}")
    public Optional<Badge> getBadgeById(@PathVariable  Long id){
        return badgeService.getBadgeById(id);

    }

    @PostMapping
    public Badge createbadge(@RequestBody Badge badge){
        return badgeService.createbadge(badge);

    }
    @DeleteMapping("/{id}")
    public void deletebadge(@PathVariable Long id){
        badgeService.deletebadge(id);
    }


}