package com.project.badge.controller;

import com.project.badge.model.Badge;
import com.project.badge.service.BadgeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/badges") // مسار أفضل واحترافي أكثر
@CrossOrigin(origins = "*") // مهم لو تعمل مع Angular
public class BadgeController {

    private final BadgeService badgeService;

    @Autowired
    public BadgeController(BadgeService badgeService) {
        this.badgeService = badgeService;
    }

    @GetMapping
    public List<Badge> getAllBadges() {
        return badgeService.getAllBadges();
    }

    @GetMapping("/{id}")
    public Optional<Badge> getBadgeById(@PathVariable Long id) {
        return badgeService.getBadgeById(id);
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
