import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfileService, Profile } from '../services/profile.service';
import { UserService, User } from '../services/user.service';

@Component({
  standalone: true,
  selector: 'app-profile-add',
  templateUrl: './profile-add.component.html',
  styleUrls: ['./profile-edit.component.css'], // نستخدم نفس الستايل المضغوط
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ProfileAddComponent implements OnInit {
  newProfile: Profile = {
    libelle: '',
    nni: '',
    phone: '',
    photoUrl: '',
    user: { id: 0 },
  };
  users: User[] = [];

  constructor(
    private profileService: ProfileService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: u => this.users = u,
      error: err => console.error('Error loading users', err)
    });
  }

  save(): void {
    this.profileService.addProfile(this.newProfile).subscribe({
      next: () => this.router.navigate(['/profile']),
      error: err => console.error('Error adding profile', err)
    });
  }

  cancel(): void {
    this.router.navigate(['/profile']);
  }
}
