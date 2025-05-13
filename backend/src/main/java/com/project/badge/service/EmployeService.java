package com.project.badge.service;

import com.project.badge.model.Employe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface EmployeService {
    Page<Employe> getAllEmploye(Pageable pageable);
    Optional<Employe> getEmployeById(Long id);
    Employe createemploye(Employe employe);
    void deleteemploye(Long id);
}
