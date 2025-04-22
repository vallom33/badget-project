import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Must be imported
import { SidebarComponent } from './sidebar/sidebar.component';

import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NgClass], // RouterOutlet must be here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarCollapsed = false;
  currentUser = { name: 'Admin', role: 'Administrator' };

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}