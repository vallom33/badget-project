// src/app/pages/employe-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeService, Employe } from '../services/employe.service';

@Component({
  standalone: true,
  selector: 'app-employe-edit',
  templateUrl: './employe-edit.component.html',
  styleUrls: ['./employe-edit.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class EmployeEditComponent implements OnInit {
  employe!: Employe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private svc: EmployeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getEmployes().subscribe(list => {
      this.employe = list.find(e => e.id === id)!;
    });
  }

  update() {
    this.svc.createEmploye(this.employe).subscribe(() => {
      this.router.navigate(['/employes']);
    });
  }
  cancel() {
    this.router.navigate(['/employes']);
  }
}
