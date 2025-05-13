import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile.model';
import { UserService, User } from '../services/user.service';

@Component({
  standalone: true,
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ProfileEditComponent implements OnInit {
  profile!: Profile;
  users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // جلب قائمة المستخدمين
    this.userService.getUsers().subscribe(
      (u) => (this.users = u),
      (err) => console.error('Error loading users', err)
    );
    // جلب البروفايل الحالي
    this.profileService.getProfileById(id).subscribe(
      (p) => {
        // تأكد أنّ الـ user موجودة كـ { id, ... }
        this.profile = {
          ...p,
          user: { id: p.user.id, username: p.user.username, email: p.user.email, password: p.user.password }
        };
      },
      (err) => console.error('Error loading profile', err)
    );
  }

  updateProfile(): void {
    this.profileService.updateProfile(this.profile).subscribe(
      () => this.router.navigate(['/profile']),
      (err) => console.error('Error updating profile', err)
    );
  }

  cancel(): void {
    this.router.navigate(['/profile']);
  }
}
