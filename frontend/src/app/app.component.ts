import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthService } from './services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSidebarCollapsed = false;
  isLoginPage = false;
  currentUser: any = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // تحقق مباشر عند بداية التطبيق
    this.isLoginPage = this.router.url.startsWith('/login');

    // استمع لتغيرات الرابط
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isLoginPage = event.urlAfterRedirects.startsWith('/login');
        if (!this.isLoginPage && this.authService.isAuthenticated()) {
          this.currentUser = this.authService.getCurrentUser();
        }
      });
  }

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
