package com.project.badge.service;

import com.project.badge.model.Badge;
import com.project.badge.model.Lot;
import com.project.badge.repository.BadgeRepository;
import com.project.badge.repository.LotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LotServiceImpl implements LotService {

    @Autowired
    private LotRepository lotRepository;

    @Autowired
    private BadgeRepository badgeRepository;

    @Override
    public List<Lot> getAllLot() {
        return lotRepository.findAll();
    }

    @Override
    public Optional<Lot> getlotById(Long id) {
        return lotRepository.findById(id);
    }

    @Override
    public Lot createlot(Lot lot) {
        return lotRepository.save(lot);
    }

    @Override
    public void deletelot(Long id) {
        lotRepository.deleteById(id);
    }

    @Override
    public void assignWaitingBadgesToLot(Long lotId) {
        Lot lot = lotRepository.findById(lotId)
                .orElseThrow(() -> new RuntimeException("Lot not found"));

        List<Badge> waitingBadges = badgeRepository.findByBadgeStatus_Status("EN_ATTENTE");

        for (Badge badge : waitingBadges) {
            badge.setLot(lot);
            badgeRepository.save(badge);
        }
    }
}
