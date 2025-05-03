// src/app/pages/authority-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
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
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(u => this.users = u);
  }

  addAuthority(): void {
    this.authService.createAuthorite(this.newAuth).subscribe(created => {
      this.authorites.push(created);
      this.newAuth = { username: '', role: '' };
    });
  }

  deleteAuthority(id: number): void {
    if (!confirm('هل تريد حذف هذه الصلاحية؟')) return;
    this.authService.deleteAuthorite(id).subscribe(() => {
      this.authorites = this.authorites.filter(a => a.id !== id);
    });
  }
}
