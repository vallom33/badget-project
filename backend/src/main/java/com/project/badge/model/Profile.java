package com.project.badge.model;

import jakarta.persistence.*;

@Entity
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "libelle", nullable = false, unique = true)
    private String libelle;

    @Column(name = "nni", nullable = false, unique = true) // ملاحظة: nni بحروف صغيرة لتطابق الاسم في JSON
    private String nni;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Profile() {}

    public Profile(String libelle, String nni) {
        this.libelle = libelle;
        this.nni = nni;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public String getNni() {
        return nni;
    }

    public void setNni(String nni) {
        this.nni = nni;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
