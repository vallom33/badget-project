import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Add this
import { UserService, User } from '../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-add',
  standalone: true, // <-- Add this for modern Angular
  imports: [FormsModule, CommonModule], // <-- Add required modules
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css' // Optional: if you have styles
})
export class UserAddComponent {
  user: User = {
    id: 0, // Consider removing if backend generates ID
    username: '',
    email: '',
    password: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  addUser() {
    if (!this.isFormValid()) return;

    this.userService.createUser(this.user).subscribe({
      next: () => {
        alert('✅ Utilisateur ajouté avec succès');
        this.router.navigate(['/users']);
      },
      error: (err) => {
        alert(`❌ Erreur: ${err.message || 'Unknown error'}`);
        console.error(err);
      }
    });
  }

  private isFormValid(): boolean {
    return !!this.user.username && 
           !!this.user.email && 
           !!this.user.password;
  }
}