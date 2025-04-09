import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '⚙️', label: 'Settings' },
    { icon: '📧', label: 'Messages' },
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }
}
