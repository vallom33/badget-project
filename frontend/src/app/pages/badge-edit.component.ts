// src/app/badge/badge-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BadgeService, Badge } from '../services/badge.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-badge-edit',
  templateUrl: './badge-edit.component.html',
  imports: [CommonModule, FormsModule],
})
export class BadgeEditComponent implements OnInit {
  badgeId!: number;
  badge: Badge = {
    username: '',
    prenom: '',
    status: '',
    badgeType: '',
    issueDate: '',
    expiryDate: '',
    photoUrl: ''
  };

  constructor(
    private route: ActivatedRoute,
    private badgeService: BadgeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.badgeId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadBadge();
  }

  loadBadge(): void {
    this.badgeService.getBadgeById(this.badgeId).subscribe((data: Badge) => {
      this.badge = data;
    });
  }

  saveBadge(): void {
    this.badgeService.updateBadge(this.badge).subscribe(() => {
      this.router.navigate(['/badges']);
    });
  }
}
