package com.project.badge.service;

import com.project.badge.model.Badge;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;

public interface BadgeService {
    Page<Badge> getAllBadges(Pageable pageable);
    Optional<Badge> getBadgeById(Long id);
    Badge createBadge(Badge badge);
    Badge updateBadge(Long id, Badge updatedBadge);
    void deleteBadge(Long id);
}