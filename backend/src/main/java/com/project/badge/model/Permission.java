package com.project.badge.model;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;


@Entity
public class Permission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(name="username",nullable = false,unique = true)
    private String username;

    @Column(name="description",nullable = false,unique = true)
    private String description;

    @ManyToMany(mappedBy = "permissions")
    private Set<Authorite> authorities = new HashSet<>();


    public Permission() {

    }
    public Permission(String username, String description){
        this.username = username;
        this.description = description;

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
    public String getDescription() {
        return description;
    }


}
