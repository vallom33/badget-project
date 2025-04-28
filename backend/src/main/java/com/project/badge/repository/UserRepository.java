package com.project.badge.repository;

import com.project.badge.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);  // طريقة للبحث عن مستخدم باستخدام اسم المستخدم
}
