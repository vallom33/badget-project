import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Badge, BadgeService } from '../services/badge.service';

@Component({
  standalone: true,
  selector: 'app-badge-add',
  templateUrl: './badge-add.component.html',
  imports: [CommonModule, FormsModule],
})
export class BadgeAddComponent {
  badge: Badge = {
    username: '',
    prenom: '',
    status: '',
    badgeType: '',
    issueDate: '',
    expiryDate: '',
    photoUrl: '',
    // ▪️ أضفنا badgeStatus الافتراضي
    badgeStatus: { id: 1 }
  };

  constructor(private badgeService: BadgeService, private router: Router) {}

  saveBadge() {
    this.badgeService.createBadge(this.badge).subscribe({
      next: () => this.router.navigate(['/badges']),
      error: err => console.error('Error creating badge', err)
    });
  }
}
