// src/app/pages/employe-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeService, Employe } from '../services/employe.service';

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

  constructor(private svc: EmployeService) {}

  ngOnInit(): void {
    this.load();
  }
  load() {
    this.svc.getEmployes().subscribe(list => this.employes = list);
  }
  add() {
    this.svc.createEmploye(this.newEmploye).subscribe(e => {
      this.employes.push(e);
      this.newEmploye = { username: '', email: '', password: '' };
    });
  }
  delete(id: number) {
    if (!confirm('Supprimer cet employé ?')) return;
    this.svc.deleteEmploye(id).subscribe(() => {
      this.employes = this.employes.filter(e => e.id !== id);
    });
  }
}
