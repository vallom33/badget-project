package com.project.badge.config;

import com.project.badge.service.UserDetailsServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService() {
        return new UserDetailsServiceImpl();  // استخدم الـ UserDetailsService الخاص بك هنا
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/login", "/register").permitAll() // السماح بالوصول إلى صفحات التسجيل
                                .anyRequest().authenticated() // بقية الصفحات تحتاج إلى مصادقة
                )
                .formLogin(form -> form
                        .loginPage("/login")  // صفحة تسجيل الدخول
                        .permitAll()  // السماح لجميع المستخدمين للوصول إلى صفحة التسجيل
                        .defaultSuccessUrl("/users", true)  // بعد تسجيل الدخول بنجاح، سيتم توجيه المستخدم إلى صفحة /users
                )
                .logout(logout -> logout
                        .permitAll()  // السماح للجميع بتسجيل الخروج
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();  // استخدام خوارزمية BCrypt لتشفير كلمات المرور
    }
}
