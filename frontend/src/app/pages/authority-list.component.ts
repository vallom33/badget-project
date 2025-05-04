// src/app/pages/authority-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthoriteService, Authorite } from '../services/authority.service';
import { UserService, User } from '../services/user.service';

@Component({
  standalone: true,
  selector: 'app-authority-list',
  templateUrl: './authority-list.component.html',
  styleUrls: ['./authority-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class AuthorityListComponent implements OnInit {
  authorites: Authorite[] = [];
  users: User[] = [];
  newAuth: { username: string; role: string } = { username: '', role: '' };
  editingId: number | null = null;
  editCache: { [key: number]: { username: string; role: string } } = {};

  constructor(
    private authService: AuthoriteService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadAuthorites();
    this.loadUsers();
  }

  loadAuthorites(): void {
    this.authService.getAuthorites().subscribe(data => {
      this.authorites = data;
      this.authorites.forEach(a => {
        this.editCache[a.id!] = { username: a.username, role: a.role };
      });
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(u => (this.users = u));
  }

  addAuthority(): void {
    if (!this.newAuth.username || !this.newAuth.role) return;

    this.authService.createAuthorite(this.newAuth).subscribe(created => {
      this.authorites.push(created);
      this.editCache[created.id!] = {
        username: created.username,
        role: created.role,
      };
      this.newAuth = { username: '', role: '' };
    });
  }

  deleteAuthority(id: number): void {
    if (!confirm('Do you want to delete this authority?')) return;
    this.authService.deleteAuthorite(id).subscribe(() => {
      this.authorites = this.authorites.filter(a => a.id !== id);
      delete this.editCache[id];
    });
  }

  startEdit(id: number): void {
    this.editingId = id;
  }

  saveEdit(id: number): void {
    const updated = this.editCache[id];
    this.authService.updateAuthorite(id, updated).subscribe(updatedAuth => {
      const index = this.authorites.findIndex(a => a.id === id);
      if (index !== -1) {
        this.authorites[index] = updatedAuth;
      }
      this.editingId = null;
    });
  }

  cancelEdit(): void {
    this.editingId = null;
  }
}
