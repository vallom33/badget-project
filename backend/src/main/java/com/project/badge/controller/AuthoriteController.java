package com.project.badge.controller;

import com.project.badge.model.Authorite;
import com.project.badge.service.AuthoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/authorites")

public class AuthoriteController{

    @Autowired
    private AuthoriteService authoriteService;

    @GetMapping
    public List<Authorite> getAllAuthorite(){
        return authoriteService.getAllAuthorite();
    }

    @GetMapping("/{id}")
    public Optional<Authorite> getAuthoriteById(@PathVariable  Long id){
        return authoriteService.getAuthoriteById(id);

    }

    @PostMapping
    public Authorite createauthorite(@RequestBody Authorite authorite){
        return authoriteService.createauthorite(authorite);

    }
    @DeleteMapping("/{id}")
    public void deleteauthorite(@PathVariable Long id){
        authoriteService.deleteauthorite(id);
    }


}