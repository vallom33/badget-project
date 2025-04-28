import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  user: User = {
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  addUser() {
    if (!this.isFormValid()) {
      alert('⚠️ الرجاء ملء جميع الحقول');
      return;
    }

    this.userService.addUser(this.user).subscribe({
      next: () => {
        alert('✅ تم إضافة المستخدم بنجاح');
        this.router.navigate(['/user']);
      },
      error: (err) => {
        alert(`❌ خطأ أثناء الإضافة: ${err.message || 'خطأ غير معروف'}`);
      }
    });
  }

  private isFormValid(): boolean {
    return !!this.user.username && !!this.user.email && !!this.user.password;
  }
}
