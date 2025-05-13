package com.project.badge.controller;

import com.project.badge.model.Employe;
import com.project.badge.service.EmployeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

@RestController
@RequestMapping("/employes")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeController {

    @Autowired
    private EmployeService employeService;

    // ✅ GET /employes?page=0&size=5
    @GetMapping
    public Page<Employe> getAllEmploye(Pageable pageable) {
        return employeService.getAllEmploye(pageable);
    }

    @GetMapping("/{id}")
    public Optional<Employe> getEmployeById(@PathVariable Long id) {
        return employeService.getEmployeById(id);
    }

    @PostMapping
    public Employe createemploye(@RequestBody Employe employe) {
        return employeService.createemploye(employe);
    }

    @DeleteMapping("/{id}")
    public void deleteemploye(@PathVariable Long id) {
        employeService.deleteemploye(id);
    }
}
