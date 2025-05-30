package com.project.badge.repository;

import com.project.badge.model.Badge;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface BadgeRepository extends JpaRepository<Badge, Long> {
    List<Badge> findByBadgeStatus_Status(String status);
}
