package com.project.badge.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Authorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String role;

    // لا نريد جلب مجموعة المستخدمين عند تحويل الكائن لـ JSON
    @ManyToMany(mappedBy = "authorities")
    @JsonIgnore
    private Set<User> users = new HashSet<>();

    // ولا جلب الأذونات كذلك
    @ManyToMany
    @JoinTable(
            name = "authority_permission",
            joinColumns = @JoinColumn(name = "authority_id"),
            inverseJoinColumns = @JoinColumn(name = "permission_id")
    )
    @JsonIgnore
    private Set<Permission> permissions = new HashSet<>();

    public Authorite() { }

    public Authorite(String username, String role){
        this.username = username;
        this.role = role;
    }

    // getters & setters…


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
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role=role;
    }


}
