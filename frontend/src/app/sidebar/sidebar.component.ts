import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems = [
    { icon: '🏠', label: 'Home', link: '/home' },
    { icon: '👥', label: 'Users', link: '/users' },
    { icon: '👤', label: 'Profile', link: '/profile' },
    { icon: '🎖️', label: 'Badges', link: '/badges' },
    { icon: '⚙️', label: 'Settings', link: '/settings' },
  ];

  constructor(private router: Router, private location: Location) {}

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  navigateTo(link: string): void {
    if (this.location.path() !== link) {
      this.router.navigateByUrl(link).then(() => {
        window.location.reload(); // Force refresh if needed
      });
    }
  }

  isActive(link: string): boolean {
    return this.location.path() === link;
  }
}