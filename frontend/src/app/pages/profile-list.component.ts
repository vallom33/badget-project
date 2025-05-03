import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfileService, Profile } from '../services/profile.service';
import { UserService, User } from '../services/user.service';

@Component({
  standalone: true,
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [];
  users: User[] = [];
  newProfile: Profile = {
    libelle: '',
    nni: '',
    phone: '',
    photoUrl: '',
    user: { id: 0 },
  };

  constructor(
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // load users and profiles on init
    this.userService.getUsers().subscribe({
      next: u => this.users = u,
      error: err => console.error('Error loading users', err),
    });
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe({
      next: data => this.profiles = data,
      error: err => console.error('Error loading profiles', err),
    });
  }

  addProfile(): void {
    if (!this.newProfile.user?.id) return;
    this.profileService.addProfile(this.newProfile).subscribe({
      next: created => {
        this.profiles.push(created);
        this.newProfile = {
          libelle: '',
          nni: '',
          phone: '',
          photoUrl: '',
          user: { id: 0 },
        };
      },
      error: err => console.error('Error adding profile', err),
    });
  }

  deleteProfile(id: number): void {
    if (!confirm('Are you sure you want to delete this profile?')) return;
    this.profileService.deleteProfile(id).subscribe({
      next: () => this.profiles = this.profiles.filter(p => p.id !== id),
      error: err => console.error('Error deleting profile', err),
    });
  }

  getUsername(userId: number): string {
    const u = this.users.find(x => x.id === userId);
    return u ? u.username : '—';
  }
}
