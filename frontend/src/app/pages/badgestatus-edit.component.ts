import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BadgeStatusService } from '../services/badge-status.service';
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
  badgeStatus: any = { status: '' };
  isEditMode = false;

  constructor(
    private badgeStatusService: BadgeStatusService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.badgeStatusService.getById(+id).subscribe((data: any) => {
        this.badgeStatus = data;
      });
    }
  }

  save(): void {
    if (this.isEditMode) {
      this.badgeStatusService.update(this.badgeStatus).subscribe(() => {
        this.router.navigate(['/badgestatus']);
      });
    } else {
      this.badgeStatusService.create(this.badgeStatus).subscribe(() => {
        this.router.navigate(['/badgestatus']);
      });
    }
  }
}
