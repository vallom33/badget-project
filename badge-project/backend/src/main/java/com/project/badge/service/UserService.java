package com.project.badge.service;
import com.project.badge.model.User;
import com.project.badge.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService{

    @Autowired
    private UserRepository UserRepository;

    public List<User> getAllUsers(){
        return UserRepository.findAll();
    }

    public Optional<User> getUserById(Long id){
        return UserRepository.findById(id);

    }
    public User createuser(User user){
        return UserRepository.save(user);

    }
    public void deleteuser(Long id){
        UserRepository.deleteById(id);
    }
}