// src/app/pages/authority-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AuthoriteService, Authorite } from '../services/authority.service';
import { UserService, User } from '../services/user.service';

@Component({
  standalone: true,
  selector: 'app-authority-edit',
  templateUrl: './authority-edit.component.html',
  styleUrls: ['./authority-edit.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class AuthorityEditComponent implements OnInit {
  auth: Authorite = { username: '', role: '' };
  users: User[] = [];
  isLoaded = false;  // لتأكد من تحميل البيانات

  constructor(
    private svc: AuthoriteService,
    private usvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // جلب المستخدمين أولاً
    this.usvc.getUsers().subscribe(list => {
      this.users = list;
    });

    // جلب الصلاحية
    this.svc.getAuthoriteById(id).subscribe(
      a => {
        this.auth = a;
        this.isLoaded = true;  // البيانات تم تحميلها بنجاح
      },
      err => console.error('Load error:', err)
    );
  }

  update(): void {
    console.log('Saving edit:', this.auth);
    if (!this.auth.username || !this.auth.role) return;
    this.svc.updateAuthorite(this.auth.id!, this.auth).subscribe({
      next: () => this.router.navigate(['/authorites']),
      error: e => console.error('Update failed:', e)
    });
  }

  cancel(): void {
    this.router.navigate(['/authorites']);
  }
}
