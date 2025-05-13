import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile.model';
import { UserService, User } from '../services/user.service';
import { Page } from '../models/page';

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

  // pagination state
  currentPage = 0;
  pageSize = 5;
  totalPages = 0;

  constructor(
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Load users
    this.userService.getUsers().subscribe(
      (u) => (this.users = u),
      (err) => console.error('Error loading users', err)
    );
    // Load first page of profiles
    this.loadPage(0);
  }

  loadPage(page: number): void {
    this.profileService.getProfilesPaginated(page, this.pageSize)
      .subscribe(
        (data: Page<Profile>) => {
          this.profiles = data.content;
          this.currentPage = data.number;
          this.totalPages = data.totalPages;
        },
        (err) => console.error('Error loading profiles', err)
      );
  }

  next(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }

  prev(): void {
    if (this.currentPage > 0) {
      this.loadPage(this.currentPage - 1);
    }
  }

  addProfile(): void {
    if (!this.newProfile.user?.id) return;
    this.profileService.addProfile(this.newProfile)
      .subscribe(
        (created) => {
          this.loadPage(this.currentPage);
          this.newProfile = {
            libelle: '',
            nni: '',
            phone: '',
            photoUrl: '',
            user: { id: 0 },
          };
        },
        (err) => console.error('Error adding profile', err)
      );
  }

  deleteProfile(id: number): void {
    if (!confirm('Are you sure you want to delete this profile?')) return;
    this.profileService.deleteProfile(id)
      .subscribe(
        () => this.loadPage(this.currentPage),
        (err) => console.error('Error deleting profile', err)
      );
  }

  getUsername(userId: number): string {
    const u = this.users.find((x) => x.id === userId);
    return u ? u.username : '—';
  }
}
