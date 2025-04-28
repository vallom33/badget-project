// src/app/authorite/authorite-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthoriteService, Authorite } from '../services/authority.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-authority-list',
  templateUrl: './authority-list.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class AuthorityListComponent implements OnInit {
  authorites: Authorite[] = [];
  newAuthorite: Authorite = { username: '', role: '' };

  constructor(private authoriteService: AuthoriteService) {}

  ngOnInit(): void {
    this.loadAuthorites();
  }

  loadAuthorites(): void {
    this.authoriteService.getAuthorites().subscribe((data) => {
      this.authorites = data;
    });
  }

  addAuthorite(): void {
    this.authoriteService.createAuthorite(this.newAuthorite).subscribe((a) => {
      this.authorites.push(a);
      this.newAuthorite = { username: '', role: '' };
    });
  }

  deleteAuthorite(id: number): void {
    if (confirm('Supprimer cette autorité ?')) {
      this.authoriteService.deleteAuthorite(id).subscribe(() => {
        this.authorites = this.authorites.filter(a => a.id !== id);
      });
    }
  }
}
