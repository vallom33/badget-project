import { Component, OnInit } from '@angular/core';
import { BadgeService, Badge } from '../services/badge.service';
import { Page } from '../models/page';
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
    status_id: 1,
    badgeType: '',
    issueDate: '',
    expiryDate: '',
    photoUrl: '',
  };

  currentPage = 0;
  totalPages = 0;
  pageSize = 5;

  constructor(private badgeService: BadgeService) {}

  ngOnInit(): void {
    this.loadPage(0);
  }

  loadPage(page: number): void {
    this.badgeService.getBadgesPaginated(page, this.pageSize).subscribe(
      (data: Page<Badge>) => {
        this.badges = data.content;
        this.currentPage = data.number;
        this.totalPages = data.totalPages;
      },
      (err) => console.error('Error loading badges', err)
    );
  }

  prev(): void {
    if (this.currentPage > 0) this.loadPage(this.currentPage - 1);
  }

  next(): void {
    if (this.currentPage + 1 < this.totalPages) this.loadPage(this.currentPage + 1);
  }

  addBadge(): void {
    this.badgeService.createBadge(this.newBadge).subscribe(
      () => this.loadPage(this.currentPage),
      (err) => console.error('Error adding badge', err)
    );
  }

  deleteBadge(id: number): void {
    if (!confirm('Supprimer ce badge ?')) return;
    this.badgeService.deleteBadge(id).subscribe(
      () => this.loadPage(this.currentPage),
      (err) => console.error('Error deleting badge', err)
    );
  }
}