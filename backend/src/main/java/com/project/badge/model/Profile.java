// src/main/java/com/project/badge/model/Profile.java
package com.project.badge.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class Profile {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false, unique=true)
    private String libelle;

    @Column(nullable=false, unique=true)
    private String nni;

    @Column(nullable=true)
    private String phone;

    @Column(name="photo_url", nullable=true)
    private String photoUrl;

    @OneToOne
    @JoinColumn(name="user_id")
    @JsonIgnoreProperties("profile")  // empêche la boucle Jackson
    private User user;

    // … getters & setters …

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getLibelle() { return libelle; }
    public void setLibelle(String libelle) { this.libelle = libelle; }

    public String getNni() { return nni; }
    public void setNni(String nni) { this.nni = nni; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}
