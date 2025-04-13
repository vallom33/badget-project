package com.project.badge.service;
import com.project.badge.model.Authorite;
import com.project.badge.repository.AuthoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthoriteService{

    @Autowired
    private AuthoriteRepository authoriteRepository;

    public List<Authorite> getAllAuthorite(){
        return authoriteRepository.findAll();
    }

    public Optional<Authorite> getAuthoriteById(Long id){
        return authoriteRepository.findById(id);

    }
    public Authorite createauthorite(Authorite authorite){
        return authoriteRepository.save(authorite);

    }
    public void deleteauthorite(Long id){
        authoriteRepository.deleteById(id);
    }
}