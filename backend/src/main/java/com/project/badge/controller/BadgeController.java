package com.project.badge.controller;

import com.project.badge.model.Badge;
import com.project.badge.service.BadgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@RestController
@RequestMapping("/badges")
@CrossOrigin(origins = "http://localhost:4200")
public class BadgeController {

    private final BadgeService badgeService;

    @Autowired
    public BadgeController(BadgeService badgeService) {
        this.badgeService = badgeService;
    }

    @GetMapping
    public Page<Badge> getAllBadges(Pageable pageable) {
        return badgeService.getAllBadges(pageable);
    }

    @GetMapping("/{id}")
    public Badge getBadgeById(@PathVariable Long id) {
        return badgeService.getBadgeById(id)
                .orElseThrow(() -> new RuntimeException("Badge not found with id: " + id));
    }

    @PostMapping
    public Badge createBadge(@RequestBody Badge badge) {
        return badgeService.createBadge(badge);
    }

    @PutMapping("/{id}")
    public Badge updateBadge(@PathVariable Long id, @RequestBody Badge updatedBadge) {
        return badgeService.updateBadge(id, updatedBadge);
    }

    @DeleteMapping("/{id}")
    public void deleteBadge(@PathVariable Long id) {
        badgeService.deleteBadge(id);
    }
}