// src/app/permission/permission-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PermissionService, Permission } from '../services/permission.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PermissionListComponent implements OnInit {
  permissions: Permission[] = [];
  newPermission: Permission = { username: '', description: '' };

  constructor(private permissionService: PermissionService) {}

  ngOnInit(): void {
    this.loadPermissions();
  }

  loadPermissions(): void {
    this.permissionService.getPermissions().subscribe((data) => {
      this.permissions = data;
    });
  }

  addPermission(): void {
    this.permissionService.createPermission(this.newPermission).subscribe((p) => {
      this.permissions.push(p);
      this.newPermission = { username: '', description: '' };
    });
  }

  deletePermission(id: number): void {
    if (confirm('Supprimer cette permission ?')) {
      this.permissionService.deletePermission(id).subscribe(() => {
        this.permissions = this.permissions.filter(p => p.id !== id);
      });
    }
  }
}
