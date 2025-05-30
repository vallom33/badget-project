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

  // Pagination
  currentPage = 1;
  pageSize = 5;
  get pagedAuthorites(): Authorite[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.authorites.slice(start, start + this.pageSize);
  }
  get totalPages(): number {
    return Math.ceil(this.authorites.length / this.pageSize);
  }

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
      data.forEach(a => {
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
      this.currentPage = this.totalPages; // انتقل لآخر صفحة تلقائياً
    });
  }

  deleteAuthority(id: number): void {
    if (!confirm('هل أنت متأكد من حذف هذا الدور؟')) return;
    this.authService.deleteAuthorite(id).subscribe(() => {
      this.authorites = this.authorites.filter(a => a.id !== id);
      delete this.editCache[id];
      if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    });
  }

  startEdit(id: number): void {
    this.editingId = id;
  }

  saveEdit(id: number): void {
    const updated = this.editCache[id];
    if (!updated.username || !updated.role) {
      alert('الرجاء ملء جميع الحقول!');
      return;
    }
    this.authService.updateAuthorite(id, updated).subscribe(updatedAuth => {
      const index = this.authorites.findIndex(a => a.id === id);
      if (index !== -1) {
        this.authorites[index] = updatedAuth;
        this.editCache[id] = {
          username: updatedAuth.username,
          role: updatedAuth.role,
        };
      }
      this.editingId = null;
    });
  }

  cancelEdit(): void {
    this.editingId = null;
  }

  changePage(step: number): void {
    const newPage = this.currentPage + step;
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
    }
  }
}
