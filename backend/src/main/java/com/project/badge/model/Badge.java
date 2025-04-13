package com.project.badge.model;
import jakarta.persistence.*;


@Entity
public class Badge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(name="username",nullable = false,unique = true)
    private String username;

    @Column(name="prenom",nullable = false,unique = true)
    private String prenom;

    @Column(name="status", nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn(name = "employe_id")
    private Employe employe;

    @ManyToOne
    @JoinColumn(name = "lot_id", nullable = false)
    private Lot lot;

    @ManyToOne
    @JoinColumn(name = "status_id", nullable = false)
    private BadgeStatus badgeStatus;






    public Badge() {

    }
    public Badge(String username, String prenom,String status){
        this.username = username;
        this.prenom = prenom;
        this.status = status;
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
    public String getPrenom() {
        return prenom;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

}
