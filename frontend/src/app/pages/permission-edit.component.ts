// src/app/permission/permission-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PermissionService, Permission } from '../services/permission.service';

@Component({
  standalone: true,
  selector: 'app-permission-edit',
  templateUrl: './permission-edit.component.html',
  styleUrls: ['./permission-edit.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PermissionEditComponent implements OnInit {
  permission: Permission = { username: '', description: '' };

  constructor(
    private permissionService: PermissionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.permissionService.getPermissionById(id).subscribe((p) => {
      this.permission = p;
    });
  }

  updatePermission(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.permissionService.createPermission(this.permission).subscribe(() => {
      this.router.navigate(['/permissions']);
    });
  }

  cancel(): void {
    this.router.navigate(['/permissions']);
  }
}
