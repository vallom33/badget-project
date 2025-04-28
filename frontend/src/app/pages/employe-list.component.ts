// src/app/employe/employe-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeService, Employe } from '../services/employe.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class EmployeListComponent implements OnInit {
  employes: Employe[] = [];
  newEmploye: Employe = { username: '', email: '', password: '' };

  constructor(private employeService: EmployeService) {}

  ngOnInit(): void {
    this.loadEmployes();
  }

  loadEmployes(): void {
    this.employeService.getEmployes().subscribe((data) => {
      this.employes = data;
    });
  }

  addEmploye(): void {
    this.employeService.createEmploye(this.newEmploye).subscribe((emp) => {
      this.employes.push(emp);
      this.newEmploye = { username: '', email: '', password: '' };
    });
  }

  deleteEmploye(id: number): void {
    if (confirm('Supprimer cet employé ?')) {
      this.employeService.deleteEmploye(id).subscribe(() => {
        this.employes = this.employes.filter(e => e.id !== id);
      });
    }
  }
}
