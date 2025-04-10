package com.project.badge.controller;

import com.project.badge.model.User;
import com.project.badge.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")

public class UserController{

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable  Long id){
        return userService.getUserById(id);

    }

    @PostMapping
    public User createuser(@RequestBody User user){
        return userService.createuser(user);

    }
    @DeleteMapping("/{id}")
    public void deleteuser(@PathVariable Long id){
        userService.deleteuser(id);
    }


}