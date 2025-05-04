import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PermissionService, Permission } from '../services/permission.service';
import { RouterModule } from '@angular/router';
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
  newPermission: Permission = { username: '', description: '', userId: 0 };
  users: User[] = [];
  selectedUserId: number = 0;

  constructor(
    private permissionService: PermissionService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadPermissions();
    this.loadUsers();
  }

  loadPermissions(): void {
    this.permissionService.getPermissions().subscribe((data) => {
      this.permissions = data;
    });
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addPermission(): void {
    if (this.selectedUserId) {
      const permissionToSend = {
        ...this.newPermission,
        userId: this.selectedUserId
      };
      this.permissionService.createPermission(permissionToSend).subscribe((p) => {
        this.permissions.push(p);
        this.newPermission = { username: '', description: '', userId: 0 };
        this.selectedUserId = 0;
      });
    }
  }

  deletePermission(id: number): void {
    if (confirm('Supprimer cette permission ?')) {
      this.permissionService.deletePermission(id).subscribe(() => {
        this.permissions = this.permissions.filter(p => p.id !== id);
      });
    }
  }
}
