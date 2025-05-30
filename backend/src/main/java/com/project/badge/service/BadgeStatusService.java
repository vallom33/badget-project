
// ✅ BadgeStatusService.java (Updated)
package com.project.badge.service;

import com.project.badge.model.BadgeStatus;
import com.project.badge.repository.BadgeStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BadgeStatusService {

    @Autowired
    private BadgeStatusRepository badgeStatusRepository;

    public List<BadgeStatus> getAllBadgeStatus() {
        return badgeStatusRepository.findAll();
    }

    public Optional<BadgeStatus> getBadgeStatusById(Long id) {
        return badgeStatusRepository.findById(id);
    }

    public BadgeStatus createbadgestatus(BadgeStatus badgeStatus) {
        return badgeStatusRepository.save(badgeStatus);
    }

    public void deletebadgestatus(Long id) {
        badgeStatusRepository.deleteById(id);
    }

    public BadgeStatus updateBadgeStatus(Long id, BadgeStatus updatedStatus) {
        return badgeStatusRepository.findById(id)
                .map(existing -> {
                    existing.setStatus(updatedStatus.getStatus());
                    return badgeStatusRepository.save(existing);
                })
                .orElseThrow(() -> new RuntimeException("BadgeStatus not found with id: " + id));
    }
}