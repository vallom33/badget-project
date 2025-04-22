import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  imports: [CommonModule, FormsModule],
})
export class UserEditComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
  };

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe((data: User) => {
      this.user = data;
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe({
      next: () => {
        alert('Utilisateur modifié avec succès ✅');
        this.router.navigate(['/user']); // العودة إلى القائمة
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour', err);
        alert('Échec de la mise à jour ❌');
      }
    });
  }
}
