import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent], // 👈 إصلاح المشكلة هنا
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarCollapsed = false;
  isLoginPage = false;
  currentUser: any = null;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.isLoginPage = event.url === '/login';
      if (!this.isLoginPage && this.authService.isAuthenticated()) {
        this.currentUser = this.authService.getCurrentUser();
      }
    });
  }

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
