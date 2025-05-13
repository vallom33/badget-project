package com.project.badge.service;

import com.project.badge.model.Employe;
import com.project.badge.repository.EmployeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

@Service
public class EmployeServiceImpl implements EmployeService {

    @Autowired
    private EmployeRepository employeRepository;

    @Override
    public Page<Employe> getAllEmploye(Pageable pageable) {
        return employeRepository.findAll(pageable);
    }

    @Override
    public Optional<Employe> getEmployeById(Long id) {
        return employeRepository.findById(id);
    }

    @Override
    public Employe createemploye(Employe employe) {
        return employeRepository.save(employe);
    }

    @Override
    public void deleteemploye(Long id) {
        employeRepository.deleteById(id);
    }
}
