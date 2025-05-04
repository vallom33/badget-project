import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BadgeStatusService, BadgeStatus } from '../services/badge-status.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-badge-status-edit',
  templateUrl: './badgestatus-edit.component.html',
  styleUrls: ['./badgestatus-edit.component.css'],
  imports: [CommonModule, FormsModule],
})
export class BadgeStatusEditComponent implements OnInit {
  badgeStatus: BadgeStatus = { status: '' };
  isLoading = false;

  constructor(
    private badgeStatusService: BadgeStatusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBadgeStatus();
  }

  loadBadgeStatus(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isLoading = true;
      this.badgeStatusService.getBadgeStatuses().subscribe((data) => {
        this.badgeStatus = data.find((s) => s.id === +id) || { status: '' };
        this.isLoading = false;
      });
    }
  }

  saveBadgeStatus(): void {
    this.badgeStatusService.updateBadgeStatus(this.badgeStatus).subscribe(() => {
      this.router.navigate(['/badgestatus-list']);
    });
  }

  cancelEdit(): void {
    this.router.navigate(['/badgestatus-list']);
  }
}
