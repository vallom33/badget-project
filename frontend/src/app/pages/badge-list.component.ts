import { Component, OnInit } from '@angular/core';
import { BadgeService, Badge } from '../services/badge.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class BadgeListComponent implements OnInit {
  badges: Badge[] = [];

  newBadge: Badge = {
    username: '',
    prenom: '',
    badgeType: '',
    issueDate: '',
    expiryDate: '',
    photoUrl: '',
    status_id: 1, // افتراضيًا Active
  };

  constructor(private badgeService: BadgeService) {}

  ngOnInit(): void {
    this.loadBadges();
  }

  loadBadges(): void {
    this.badgeService.getBadges().subscribe({
      next: data => this.badges = data,
      error: err => console.error(err)
    });
  }

  addBadge(): void {
    this.badgeService.createBadge(this.newBadge).subscribe({
      next: created => {
        this.badges.push(created);
        this.newBadge = {
          username: '',
          prenom: '',
          badgeType: '',
          issueDate: '',
          expiryDate: '',
          photoUrl: '',
          status_id: 1,
        };
      },
      error: err => console.error(err)
    });
  }

  deleteBadge(id: number): void {
    if (confirm('Supprimer ce badge ?')) {
      this.badgeService.deleteBadge(id).subscribe({
        next: () => this.badges = this.badges.filter(b => b.id !== id),
        error: err => console.error(err)
      });
    }
  }
}
