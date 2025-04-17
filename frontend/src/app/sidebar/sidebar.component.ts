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
  @Input() currentUser: any; // 👈 أضف هذا السطر
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems = [
    { icon: '🏠', label: 'Home', link: '/home' },
    { icon: '👥', label: 'Users', link: '/users' },
    { icon: '🧑‍💼', label: 'Employes', link: '/employes' },
    { icon: '🎖️', label: 'Badges', link: '/badges' },
    { icon: '📍', label: 'Badge Status', link: '/badge-status' },
    { icon: '🛡️', label: 'Authorities', link: '/authorities' },
    { icon: '🔑', label: 'Permissions', link: '/permissions' },
    { icon: '📦', label: 'Lots', link: '/lots' },
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
