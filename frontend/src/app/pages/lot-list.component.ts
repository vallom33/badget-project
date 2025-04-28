// src/app/lot/lot-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LotService, Lot } from '../services/lot.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-lot-list',
  templateUrl: './lot-list.component.html',
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
    this.lotService.getLots().subscribe((data) => {
      this.lots = data;
    });
  }

  addLot(): void {
    this.lotService.createLot(this.newLot).subscribe((lot) => {
      this.lots.push(lot);
      this.newLot = { nombre: 0, date: '' };
    });
  }

  deleteLot(id: number): void {
    if (confirm('Supprimer ce lot ?')) {
      this.lotService.deleteLot(id).subscribe(() => {
        this.lots = this.lots.filter(l => l.id !== id);
      });
    }
  }
}
