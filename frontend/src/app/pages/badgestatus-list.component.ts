// src/app/badge-status/badge-status-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeStatusService, BadgeStatus } from '../services/badge-status.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-badge-status-list',
  templateUrl: './badgestatus-list.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class BadgeStatusListComponent implements OnInit {
  statuses: BadgeStatus[] = [];
  newStatus: BadgeStatus = { status: '' };

  constructor(private badgeStatusService: BadgeStatusService) {}

  ngOnInit(): void {
    this.loadStatuses();
  }

  loadStatuses(): void {
    this.badgeStatusService.getBadgeStatuses().subscribe((data) => {
      this.statuses = data;
    });
  }

  addStatus(): void {
    this.badgeStatusService.createBadgeStatus(this.newStatus).subscribe((s) => {
      this.statuses.push(s);
      this.newStatus = { status: '' };
    });
  }

  deleteStatus(id: number): void {
    if (confirm('Supprimer ce statut ?')) {
      this.badgeStatusService.deleteBadgeStatus(id).subscribe(() => {
        this.statuses = this.statuses.filter(s => s.id !== id);
      });
    }
  }
}
