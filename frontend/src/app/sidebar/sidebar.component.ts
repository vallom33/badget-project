import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Input() currentUser: any;
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems = [
    { icon: '👥', label: 'Users', link: '/user' },
    { icon: '👨', label: 'Profile', link: '/profile' },
    { icon: '💼', label: 'Employés', link: '/employes' },
    { icon: '🎖️', label: 'Badges', link: '/badges' },
    { icon: '📋', label: 'Lots', link: '/lots' },
    { icon: '🛡️', label: 'Authorities', link: '/authorities' },
    { icon: '🔐', label: 'Permissions', link: '/permissions' },
    { icon: '📌', label: 'Badge Status', link: '/badgestatus' },
  ];

  constructor(private router: Router, private location: Location, private authService: AuthService) {}

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  navigateTo(link: string): void {
    if (this.location.path() !== link) {
      this.router.navigateByUrl(link);
    }
  }

  isActive(link: string): boolean {
    return this.location.path() === link;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
