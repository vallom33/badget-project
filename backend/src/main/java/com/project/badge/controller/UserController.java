package com.project.badge.controller;

import com.project.badge.model.User;
import com.project.badge.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")

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

    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        Optional<User> optionalUser = userService.getUserById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setEmail(updatedUser.getEmail());
            user.setUsername(updatedUser.getUsername());
            user.setPassword(updatedUser.getPassword());
            // تجاهل الحقول المرتبطة مثل profile والـ employee الآن

            return userService.createuser(user); // إعادة استخدام نفس دالة الحفظ
        } else {
            throw new RuntimeException("Utilisateur non trouvé avec l'ID: " + id);
        }
    }



}