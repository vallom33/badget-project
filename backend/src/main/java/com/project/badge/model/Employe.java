package com.project.badge.model;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;


@Entity
public class Employe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(name="username",nullable = false,unique = true)
    private String username;

    @Column(name="email",nullable = false,unique = true)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    // داخل كيان Employee
    @OneToMany(mappedBy = "employe", cascade = CascadeType.ALL)
    private List<Badge> badges = new ArrayList<>();


    public Employe() {

    }
    public Employe(String username, String email,String password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id=id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

}
