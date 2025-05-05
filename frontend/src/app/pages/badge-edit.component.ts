import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Badge, BadgeService } from '../services/badge.service';

@Component({
  standalone: true,
  selector: 'app-badge-edit',
  templateUrl: './badge-edit.component.html',
  imports: [CommonModule, FormsModule],
})
export class BadgeEditComponent implements OnInit {
  badge!: Badge;

  constructor(
    private route: ActivatedRoute,
    private badgeService: BadgeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.badgeService.getBadgeById(id).subscribe({
      next: data => this.badge = data,
      error: err => console.error(err)
    });
  }

  updateBadge() {
    this.badgeService.updateBadge(this.badge).subscribe({
      next: () => this.router.navigate(['/badges']),
      error: err => console.error(err)
    });
  }
}
