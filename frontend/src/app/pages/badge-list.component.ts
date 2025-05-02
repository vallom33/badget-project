import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeService, Badge } from '../services/badge.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class BadgeListComponent implements OnInit {
  badges: Badge[] = [];
  newBadge: Badge = {
    username: '',
    prenom: '',
    status: '',
    badgeType: '',
    issueDate: '',
    expiryDate: '',
    photoUrl: ''
  };

  constructor(private badgeService: BadgeService) {}

  ngOnInit(): void {
    this.loadBadges();
  }

  loadBadges(): void {
    this.badgeService.getBadges().subscribe(data => this.badges = data);
  }

  addBadge(): void {
    this.badgeService.createBadge(this.newBadge).subscribe(created => {
      this.badges.push(created);
      this.newBadge = { username: '', prenom: '', status: '', badgeType: '', issueDate: '', expiryDate: '', photoUrl: '' };
    });
  }

  deleteBadge(id: number): void {
    if (confirm('Are you sure you want to delete this badge?')) {
      this.badgeService.deleteBadge(id).subscribe(() => {
        this.badges = this.badges.filter(b => b.id !== id);
      });
    }
  }
}
