package com.project.badge;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


public class PasswordEncoderTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String rawPassword = "omar123"; // هنا اكتب الكلمة الجديدة
        String encodedPassword = encoder.encode(rawPassword);

        System.out.println(encodedPassword);
    }
}
