package com.project.badge.model;
import jakarta.persistence.*;


@Entity
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(name="libelle",nullable = false,unique = true)
    private String libelle;

    @Column(name="NNI",nullable = false,unique = true)
    private String NNI;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;



    public Profile() {

    }
    public Profile(String libelle, String NNI){
        this.libelle = libelle;
        this.NNI = NNI;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id=id;
    }
    public String getLibelle() {
        return libelle;
    }
    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }
    public String getNNI() {
        return NNI;
    }
    public void setNNI(String NNI) {
        this.NNI=NNI;
    }


}
