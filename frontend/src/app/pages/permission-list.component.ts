import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PermissionService, Permission, PermissionRequest } from '../services/permission.service';
import { UserService, User } from '../services/user.service';

@Component({
  standalone: true,
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PermissionListComponent implements OnInit {
  permissions: Permission[] = [];
  users: User[] = [];
  newPermission: { description: string; userId?: number } = { description: '' };
  editingId: number | null = null;
  editCache: { [key: number]: { description: string; userId?: number } } = {};

  currentPage = 1;
  pageSize = 5;

  get pagedPermissions(): Permission[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.permissions.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.permissions.length / this.pageSize);
  }

  constructor(private permissionService: PermissionService, private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(u => {
      this.users = u;
      this.loadPermissions();
    });
  }

  loadPermissions(): void {
    this.permissionService.getPermissions().subscribe(data => {
      this.permissions = data.map(p => {
        const matchedUser = this.users.find(u => u.id === p.user?.id);
        return { ...p, user: matchedUser || p.user };
      });

      this.permissions.forEach(p => {
        this.editCache[p.id!] = {
          description: p.description,
          userId: p.user?.id
        };
      });
    });
  }

  addPermission(): void {
  if (!this.newPermission.description || !this.newPermission.userId) return;

  const permissionToSend: PermissionRequest = {
    description: this.newPermission.description,
    userId: this.newPermission.userId,
  };

  this.permissionService.createPermission(permissionToSend).subscribe(created => {
    const user = this.users.find(u => u.id === this.newPermission.userId) || null;
    this.permissions.push({ ...created, user });
    this.editCache[created.id!] = {
      description: created.description,
      userId: user ? user.id : undefined
    };
    this.newPermission = { description: '' };
    this.currentPage = this.totalPages;
  });
}


  deletePermission(id: number): void {
    if (!confirm('Are you sure you want to delete this permission?')) return;
    this.permissionService.deletePermission(id).subscribe(() => {
      this.permissions = this.permissions.filter(p => p.id !== id);
      delete this.editCache[id];
      if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    });
  }

  startEdit(id: number): void {
    this.editingId = id;
  }

  saveEdit(id: number): void {
    const updated = this.editCache[id];
    if (!updated.description || !updated.userId) {
      alert('Please fill in all fields!');
      return;
    }

    const updatedPermission: PermissionRequest = {
      description: updated.description,
      userId: updated.userId,
    };

    this.permissionService.updatePermission(id, updatedPermission).subscribe(updatedPerm => {
      const index = this.permissions.findIndex(p => p.id === id);
      if (index !== -1) {
        const user = this.users.find(u => u.id === updated.userId) || null;
        this.permissions[index] = { ...updatedPerm, user };
        this.editCache[id] = {
          description: updatedPerm.description,
          userId: updatedPerm.user?.id
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
