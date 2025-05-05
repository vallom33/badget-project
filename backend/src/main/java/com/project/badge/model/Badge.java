package com.project.badge.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Badge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="username", nullable = true)
    private String username;

    @Column(name="prenom", nullable = true)
    private String prenom;

    @Column(name="status", nullable = true)
    private String status;

    @ManyToOne
    @JoinColumn(name = "employe_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Employe employe;

    @ManyToOne
    @JoinColumn(name = "lot_id", nullable = true)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Lot lot;

    @ManyToOne
    @JoinColumn(name = "status_id", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private BadgeStatus badgeStatus;


    // ✅ الحقول الجديدة التي طلبتها
    @Column(name = "badge_type")
    private String badgeType;

    @Column(name = "issue_date")
    private LocalDate issueDate;

    @Column(name = "expiry_date")
    private LocalDate expiryDate;

    @Column(name = "photo_url")
    private String photoUrl;

    // ✅ Constructor فارغ
    public Badge() {}

    // ✅ Getters و Setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPrenom() { return prenom; }
    public void setPrenom(String prenom) { this.prenom = prenom; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Employe getEmploye() { return employe; }
    public void setEmploye(Employe employe) { this.employe = employe; }

    public Lot getLot() { return lot; }
    public void setLot(Lot lot) { this.lot = lot; }

    public BadgeStatus getBadgeStatus() { return badgeStatus; }
    public void setBadgeStatus(BadgeStatus badgeStatus) { this.badgeStatus = badgeStatus; }

    public String getBadgeType() { return badgeType; }
    public void setBadgeType(String badgeType) { this.badgeType = badgeType; }

    public LocalDate getIssueDate() { return issueDate; }
    public void setIssueDate(LocalDate issueDate) { this.issueDate = issueDate; }

    public LocalDate getExpiryDate() { return expiryDate; }
    public void setExpiryDate(LocalDate expiryDate) { this.expiryDate = expiryDate; }

    public String getPhotoUrl() { return photoUrl; }
    public void setPhotoUrl(String photoUrl) { this.photoUrl = photoUrl; }
}
