package com.project.badge.service;
import com.project.badge.model.Employe;
import com.project.badge.repository.EmployeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeService{

    @Autowired
    private EmployeRepository employeRepository;

    public List<Employe> getAllEmploye(){
        return employeRepository.findAll();
    }

    public Optional<Employe> getEmployeById(Long id){
        return employeRepository.findById(id);

    }
    public Employe createemploye(Employe employe){
        return employeRepository.save(employe);

    }
    public void deleteemploye(Long id){
        employeRepository.deleteById(id);
    }
}