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
    this.badgeService.getBadgeById(id).subscribe(data => this.badge = data);
  }

  updateBadge() {
    this.badgeService.updateBadge(this.badge).subscribe(() => {
      this.router.navigate(['/badges']);
    });
  }
}
