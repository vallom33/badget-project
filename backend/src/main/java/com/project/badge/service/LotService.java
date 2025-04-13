package com.project.badge.service;
import com.project.badge.model.Lot;
import com.project.badge.repository.LotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LotService{

    @Autowired
    private LotRepository lotRepository;

    public List<Lot> getAllLot(){
        return lotRepository.findAll();
    }

    public Optional<Lot> getlotById(Long id){
        return lotRepository.findById(id);

    }
    public Lot createlot(Lot lot){
        return lotRepository.save(lot);

    }
    public void deletelot(Long id){
        lotRepository.deleteById(id);
    }
}