import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PermissionService, Permission } from '../services/permission.service';
import { UserService, User } from '../services/user.service';

@Component({
  standalone: true,
  selector: 'app-permission-edit',
  templateUrl: './permission-edit.component.html',
  styleUrls: ['./permission-edit.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class PermissionEditComponent implements OnInit {
  permission: Permission = { description: '', user: null };
  users: User[] = [];
  selectedUserId: number | null = null;

  constructor(
    private permissionService: PermissionService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.permissionService.getPermissionById(id).subscribe((p) => {
      this.permission = p;
      this.selectedUserId = p.user?.id || null;
    });
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  updatePermission(): void {
    if (!this.selectedUserId || !this.permission.description) return;

    const updatedPermission = {
      description: this.permission.description,
      userId: this.selectedUserId
    };

    this.permissionService.updatePermission(this.permission.id!, updatedPermission).subscribe(() => {
      this.router.navigate(['/permissions']);
    });
  }

  cancel(): void {
    this.router.navigate(['/permissions']);
  }
}
