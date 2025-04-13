package com.project.badge.service;
import com.project.badge.model.Badge;
import com.project.badge.repository.BadgeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BadgeService{

    @Autowired
    private BadgeRepository BadgeRepository;

    public List<Badge> getAllBadge(){
        return BadgeRepository.findAll();
    }

    public Optional<Badge> getBadgeById(Long id){
        return BadgeRepository.findById(id);

    }
    public Badge createbadge(Badge badge){
        return BadgeRepository.save(badge);

    }
    public void deletebadge(Long id){
        BadgeRepository.deleteById(id);
    }
}