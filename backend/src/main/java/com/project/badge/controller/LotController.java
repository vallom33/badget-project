package com.project.badge.controller;

import com.project.badge.model.Lot;
import com.project.badge.service.LotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/lots")

public class LotController{

    @Autowired
    private LotService lotService;

    @GetMapping
    public List<Lot> getAllLot(){
        return lotService.getAllLot();
    }

    @GetMapping("/{id}")
    public Optional<Lot> getLotById(@PathVariable  Long id){
        return lotService.getlotById(id);

    }

    @PostMapping
    public Lot createlot(@RequestBody Lot lot){
        return lotService.createlot(lot);

    }
    @DeleteMapping("/{id}")
    public void deletelot(@PathVariable Long id){
        lotService.deletelot(id);
    }


}