package com.project.badge.repository;

import com.project.badge.model.BadgeStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BadgeStatusRepository extends JpaRepository<BadgeStatus, Long> {
}
