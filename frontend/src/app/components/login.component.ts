// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (resp) => {
        const body = resp.body as any;
        this.authService.saveToken(body.token);
        this.router.navigate(['/user']);
      },
      error: () => {
        this.errorMessage = 'اسم المستخدم أو كلمة المرور غير صحيحة';
      }
    });
  }
  
}
