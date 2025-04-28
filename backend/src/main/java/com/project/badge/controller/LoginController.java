package com.project.badge.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "login"; // تأكد من أن هذا الاسم يتوافق مع صفحة HTML التي تعرض نموذج تسجيل الدخول
    }
}
