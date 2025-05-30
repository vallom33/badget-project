// ✅ badgestatus-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeStatusService, BadgeStatus } from '../services/badge-status.service';
import { BadgeService, Badge } from '../services/badge.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-badgestatus-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './badgestatus-list.component.html',
  styleUrls: ['./badgestatus-list.component.css']
})
export class BadgeStatusListComponent implements OnInit {
  badgeStatuses: BadgeStatus[] = [];
  badges: Badge[] = [];
  newStatus: BadgeStatus = { status: '', badgeId: null };
  editingStatus: BadgeStatus | null = null;
  page: number = 1;
  pageSize: number = 5;

  constructor(
    private badgeStatusService: BadgeStatusService,
    private badgeService: BadgeService
  ) {}

  ngOnInit(): void {
    this.loadStatuses();
    this.loadBadges();
  }

  loadStatuses(): void {
    this.badgeStatusService.getAll().subscribe(data => {
      this.badgeStatuses = data;
    });
  }

  loadBadges(): void {
    this.badgeService.getBadgesPaginated(0, 100).subscribe(data => {
      this.badges = data.content;
    });
  }

  getBadgeLabelById(id: number | null | undefined): string {
    const badge = this.badges.find(b => b.id === id);
    return badge ? badge.label || `Badge #${badge.id}` : 'Unknown';
  }

  createStatus(): void {
    if (!this.newStatus.status) return;
    this.badgeStatusService.create(this.newStatus).subscribe(() => {
      this.newStatus = { status: '', badgeId: null };
      this.loadStatuses();
    });
  }

  deleteStatus(id: number): void {
    if (!confirm('Are you sure to delete this status?')) return;
    this.badgeStatusService.delete(id).subscribe(() => {
      this.loadStatuses();
    });
  }

  editStatus(status: BadgeStatus): void {
    this.editingStatus = { ...status };
  }

  updateStatus(): void {
    if (!this.editingStatus) return;
    this.badgeStatusService.update(this.editingStatus).subscribe(() => {
      this.editingStatus = null;
      this.loadStatuses();
    });
  }

  cancelEdit(): void {
    this.editingStatus = null;
  }

  paginatedStatuses(): BadgeStatus[] {
    const start = (this.page - 1) * this.pageSize;
    return this.badgeStatuses.slice(start, start + this.pageSize);
  }

  totalPages(): number {
    return Math.ceil(this.badgeStatuses.length / this.pageSize);
  }
}
