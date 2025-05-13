package com.project.badge.service;

import com.project.badge.model.Badge;
import com.project.badge.repository.BadgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;

@Service
public class BadgeServiceImpl implements BadgeService {

    private final BadgeRepository badgeRepository;

    @Autowired
    public BadgeServiceImpl(BadgeRepository badgeRepository) {
        this.badgeRepository = badgeRepository;
    }

    @Override
    public Page<Badge> getAllBadges(Pageable pageable) {
        return badgeRepository.findAll(pageable);
    }

    @Override
    public Optional<Badge> getBadgeById(Long id) {
        return badgeRepository.findById(id);
    }

    @Override
    public Badge createBadge(Badge badge) {
        return badgeRepository.save(badge);
    }

    @Override
    public Badge updateBadge(Long id, Badge updatedBadge) {
        return badgeRepository.findById(id)
                .map(existing -> {
                    existing.setUsername(updatedBadge.getUsername());
                    existing.setPrenom(updatedBadge.getPrenom());
                    existing.setStatus(updatedBadge.getStatus());
                    existing.setEmploye(updatedBadge.getEmploye());
                    existing.setLot(updatedBadge.getLot());
                    existing.setBadgeStatus(updatedBadge.getBadgeStatus());
                    existing.setBadgeType(updatedBadge.getBadgeType());
                    existing.setIssueDate(updatedBadge.getIssueDate());
                    existing.setExpiryDate(updatedBadge.getExpiryDate());
                    existing.setPhotoUrl(updatedBadge.getPhotoUrl());
                    return badgeRepository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("Badge not found with id: " + id));
    }

    @Override
    public void deleteBadge(Long id) {
        badgeRepository.deleteById(id);
    }
}