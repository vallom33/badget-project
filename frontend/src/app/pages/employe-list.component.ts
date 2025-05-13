// src/app/pages/employe-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeService, Employe } from '../services/employe.service';
import { Page } from '../models/page';

@Component({
  standalone: true,
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class EmployeListComponent implements OnInit {
  employes: Employe[] = [];
  newEmploye: Employe = { username: '', email: '', password: '' };

  // pagination
  currentPage = 0;
  totalPages = 0;
  pageSize = 5;

  constructor(private svc: EmployeService) {}

  ngOnInit(): void {
    this.loadPage(0);
  }

  loadPage(page: number): void {
    this.svc.getEmployesPaginated(page, this.pageSize).subscribe(
      (data: Page<Employe>) => {
        this.employes = data.content;
        this.currentPage = data.number;
        this.totalPages = data.totalPages;
      },
      (err) => console.error('Error loading employes', err)
    );
  }

  prev(): void {
    if (this.currentPage > 0) {
      this.loadPage(this.currentPage - 1);
    }
  }

  next(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }

  add(): void {
    this.svc.createEmploye(this.newEmploye).subscribe(
      (e) => {
        this.loadPage(this.currentPage);
        this.newEmploye = { username: '', email: '', password: '' };
      },
      (err) => console.error('Error adding employe', err)
    );
  }

  delete(id: number): void {
    if (!confirm('Supprimer cet employé ?')) return;
    this.svc.deleteEmploye(id).subscribe(
      () => this.loadPage(this.currentPage),
      (err) => console.error('Error deleting employe', err)
    );
  }
}
