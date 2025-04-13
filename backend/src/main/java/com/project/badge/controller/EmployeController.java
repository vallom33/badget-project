package com.project.badge.controller;

import com.project.badge.model.Employe;
import com.project.badge.service.EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employes")

public class EmployeController{

    @Autowired
    private EmployeService employeService;

    @GetMapping
    public List<Employe> getAllEmploye(){
        return employeService.getAllEmploye();
    }

    @GetMapping("/{id}")
    public Optional<Employe> getEmployeById(@PathVariable  Long id){
        return employeService.getEmployeById(id);

    }

    @PostMapping
    public Employe createemploye(@RequestBody Employe employe){
        return employeService.createemploye(employe);

    }
    @DeleteMapping("/{id}")
    public void deleteemploye(@PathVariable Long id){
        employeService.deleteemploye(id);
    }


}