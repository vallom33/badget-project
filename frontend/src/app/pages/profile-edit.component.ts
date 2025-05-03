import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { ProfileService, Profile } from '../services/profile.service';
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
    public router: Router,
    private profileService: ProfileService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUsers().subscribe(u => (this.users = u));
    this.profileService.getProfileById(id).subscribe(p => (this.profile = p));
  }

  updateProfile(): void {
    this.profileService.updateProfile(this.profile).subscribe(() => {
      this.router.navigate(['/profile']);
    });
  }

  cancel(): void {
    this.router.navigate(['/profile']);
  }
}
