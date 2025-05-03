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

  addLot(): void {
    this.lotService.createLot(this.newLot).subscribe({
      next: lot => {
        this.lots.push(lot);
        this.newLot = { nombre: 0, date: '' };
      },
      error: err => console.error('Error creating lot', err)
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
