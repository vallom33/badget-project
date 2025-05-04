package com.project.badge.model;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;


@Entity
public class Lot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(name="nombre",nullable = false,unique = true)
    private Integer nombre;

    @Column(name="date",nullable = false,unique = true)
    private String date;

    @OneToMany(mappedBy = "lot", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Badge> badges = new ArrayList<>();




    public Lot() {

    }
    public Lot(Integer nombre, String date){
        this.nombre = nombre;
        this.date = date;

    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id=id;
    }
    public Integer getNombre() {
        return nombre;
    }
    public void setNombre(Integer nombre) {
        this.nombre = nombre;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date=date;
    }

}
