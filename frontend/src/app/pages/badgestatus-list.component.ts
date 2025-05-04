import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeStatusService, BadgeStatus } from '../services/badge-status.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-badge-status-list',
  templateUrl: './badgestatus-list.component.html',
  styleUrls: ['./badgestatus-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class BadgeStatusListComponent implements OnInit {
  statuses: BadgeStatus[] = [];
  newStatus: BadgeStatus = { status: '' };
  editingStatus: BadgeStatus | null = null;

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
    if (!this.newStatus.status.trim()) return;
    this.badgeStatusService.createBadgeStatus(this.newStatus).subscribe((s) => {
      this.statuses.push(s);
      this.newStatus = { status: '' };
    });
  }

  editStatus(status: BadgeStatus): void {
    this.editingStatus = { ...status };
  }

  saveStatus(): void {
    if (!this.editingStatus) return;
    this.badgeStatusService.updateBadgeStatus(this.editingStatus).subscribe((updated) => {
      const index = this.statuses.findIndex(s => s.id === updated.id);
      if (index > -1) this.statuses[index] = updated;
      this.editingStatus = null;
    });
  }

  cancelEdit(): void {
    this.editingStatus = null;
  }

  deleteStatus(id: number): void {
    if (confirm('Supprimer ce statut ?')) {
      this.badgeStatusService.deleteBadgeStatus(id).subscribe(() => {
        this.statuses = this.statuses.filter(s => s.id !== id);
      });
    }
  }
}
