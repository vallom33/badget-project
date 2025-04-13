package com.project.badge.model;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;


@Entity
public class BadgeStatus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(name="EnAttente",nullable = false,unique = true)
    private String EnAttente;

    @Column(name="finie",nullable = false,unique = true)
    private String finie;

    @Column(name="desactive", nullable = false)
    private String desactive;

    @OneToMany(mappedBy = "status", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Badge> badges = new ArrayList<>();


    public BadgeStatus() {

    }
    public BadgeStatus(String EnAttente, String finie,String desactive){
        this.EnAttente = EnAttente;
        this.finie = finie;
        this.desactive = desactive;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id=id;
    }
    public String getEnAttente() {
        return EnAttente;
    }
    public void setEnAttente(String EnAttente) {
        this.EnAttente = EnAttente;
    }
    public String getfinie() {
        return finie;
    }
    public String getDesactive() {
        return desactive;
    }
    public void setDesactive(String desactive) {
        this.desactive = desactive;
    }

}
