package com.project.badge.service;

import com.project.badge.model.Lot;

import java.util.List;
import java.util.Optional;

public interface LotService {
    List<Lot> getAllLot();
    Optional<Lot> getlotById(Long id);
    Lot createlot(Lot lot);
    void deletelot(Long id);

    // ✅ جديد: ربط البطاقات ذات الحالة EN_ATTENTE بالـ Lot
    void assignWaitingBadgesToLot(Long lotId);
}
