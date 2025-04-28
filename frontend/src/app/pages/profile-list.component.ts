import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService, Profile } from '../services/profile.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-profile-page',
  templateUrl: './profile-list.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [];
  newProfile: Profile = { libelle: '', nni: '' };

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe({
      next: (data: Profile[]) => {
        this.profiles = data;
      },
      error: (error) => {
        console.error('Error loading profiles:', error);
      }
    });
  }

  addProfile(): void {
    this.profileService.addProfile(this.newProfile).subscribe({
      next: (createdProfile: Profile) => {
        this.profiles.push(createdProfile);
        this.newProfile = { libelle: '', nni: '' };
      },
      error: (error) => {
        console.error('Error adding profile:', error);
      }
    });
  }

  deleteProfile(id: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce profile ?")) {
      this.profileService.deleteProfile(id).subscribe({
        next: () => {
          this.profiles = this.profiles.filter(p => p.id !== id);
        },
        error: (error) => {
          console.error('Error deleting profile:', error);
        }
      });
    }
  }
}
