// src/app/lot/lot-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { LotService, Lot } from '../services/lot.service';

@Component({
  standalone: true,
  selector: 'app-lot-edit',
  templateUrl: './lot-edit.component.html',
  styleUrls: ['./lot-edit.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class LotEditComponent implements OnInit {
  lot!: Lot;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lotService: LotService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.lotService.getLots().subscribe(lots => {
      this.lot = lots.find(l => l.id === id)!;
    });
  }

  updateLot(): void {
    this.lotService.createLot(this.lot).subscribe({ // reuse POST→PUT on backend
      next: () => this.router.navigate(['/lots']),
      error: err => console.error('Error updating lot', err)
    });
  }

  cancel(): void {
    this.router.navigate(['/lots']);
  }
}
