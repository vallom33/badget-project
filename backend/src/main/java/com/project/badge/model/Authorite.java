package com.project.badge.model;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;


@Entity
public class Authorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(name="username",nullable = false,unique = true)
    private String username;

    @Column(name="role",nullable = false,unique = true)
    private String role;

    @ManyToMany(mappedBy = "authorities")
    private Set<User> users = new HashSet<>();

    @ManyToMany
    @JoinTable(
            name = "authority_permission",
            joinColumns = @JoinColumn(name = "authority_id"),
            inverseJoinColumns = @JoinColumn(name = "permission_id")
    )
    private Set<Permission> permissions = new HashSet<>();





    public Authorite() {

    }
    public Authorite(String username, String role){
        this.username = username;
        this.role = role;

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
    public String getRole() {
        return role;
    }


}
