package com.project.badge.service;

import com.project.badge.model.Badge;
import com.project.badge.repository.BadgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BadgeService {

    private final BadgeRepository badgeRepository;

    @Autowired
    public BadgeService(BadgeRepository badgeRepository) {
        this.badgeRepository = badgeRepository;
    }

    public List<Badge> getAllBadges() {
        return badgeRepository.findAll();
    }

    public Optional<Badge> getBadgeById(Long id) {
        return badgeRepository.findById(id);
    }

    public Badge createBadge(Badge badge) {
        return badgeRepository.save(badge);
    }

    public Badge updateBadge(Long id, Badge updatedBadge) {
        return badgeRepository.findById(id)
                .map(existingBadge -> {
                    existingBadge.setUsername(updatedBadge.getUsername());
                    existingBadge.setPrenom(updatedBadge.getPrenom());
                    existingBadge.setStatus(updatedBadge.getStatus());
                    existingBadge.setEmploye(updatedBadge.getEmploye());
                    existingBadge.setLot(updatedBadge.getLot());
                    existingBadge.setBadgeStatus(updatedBadge.getBadgeStatus());
                    existingBadge.setBadgeType(updatedBadge.getBadgeType());
                    existingBadge.setIssueDate(updatedBadge.getIssueDate());
                    existingBadge.setExpiryDate(updatedBadge.getExpiryDate());
                    existingBadge.setPhotoUrl(updatedBadge.getPhotoUrl());
                    return badgeRepository.save(existingBadge);
                })
                .orElseThrow(() -> new RuntimeException("Badge not found with id: " + id));
    }

    public void deleteBadge(Long id) {
        badgeRepository.deleteById(id);
    }
}
