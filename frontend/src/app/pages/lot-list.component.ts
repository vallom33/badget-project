// src/app/lot/lot-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LotService, Lot } from '../services/lot.service';

@Component({
  standalone: true,
  selector: 'app-lot-list',
  templateUrl: './lot-list.component.html',
  styleUrls: ['./lot-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class LotListComponent implements OnInit {
  lots: Lot[] = [];
  newLot: Lot = { nombre: 0, date: '' };

  currentPage = 1;
  pageSize = 5;

  constructor(private lotService: LotService) {}

  ngOnInit(): void {
    this.loadLots();
  }

  loadLots(): void {
    this.lotService.getLots().subscribe({
      next: data => this.lots = data,
      error: err => console.error('Error loading lots', err)
    });
  }

  get pagedLots(): Lot[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.lots.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.lots.length / this.pageSize);
  }

  changePage(delta: number): void {
    const newPage = this.currentPage + delta;
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
    }
  }

  addLot(): void {
    this.lotService.createLot(this.newLot).subscribe({
      next: lot => {
        this.lots.push(lot);
        this.newLot = { nombre: 0, date: '' };
      },
      error: err => console.error('Error creating lot', err)
    });
  }

  assignWaitingBadgesToLot(lotId: number): void {
    if (!confirm('Are you sure you want to assign waiting badges to this lot?')) return;

    this.lotService.assignWaitingBadges(lotId).subscribe({
      next: () => alert('Badges assigned to this lot successfully!'),
      error: err => console.error('Error assigning badges', err)
    });
  }

  deleteLot(id: number): void {
    if (!confirm('Vous êtes sûr de vouloir supprimer ce lot ?')) return;
    this.lotService.deleteLot(id).subscribe({
      next: () => this.lots = this.lots.filter(l => l.id !== id),
      error: err => console.error('Error deleting lot', err)
    });
  }
}
