import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { UserService} from '../services/user.service';
import { User }               from '../models/user.model';
import { Page }               from '../models/page';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  newUser: User = { username: '', email: '', password: '' };

  // pagination state
  currentPage = 0;
  pageSize    = 5;
  totalPages  = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadPage(0);
  }

  loadPage(page: number): void {
    this.userService.getUsersPaginated(page, this.pageSize)
      .subscribe((p: Page<User>) => {
        this.users       = p.content;
        this.currentPage = p.number;
        this.totalPages  = p.totalPages;
      });
  }

  prev(): void {
    if (this.currentPage > 0) {
      this.loadPage(this.currentPage - 1);
    }
  }

  next(): void {
    if (this.currentPage + 1 < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }

  addUser(): void {
    this.userService.addUser(this.newUser)
      .subscribe(() => {
        this.loadPage(this.currentPage);
        this.newUser = { username: '', email: '', password: '' };
      });
  }

  deleteUser(id: number): void {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      return;
    }
    this.userService.deleteUser(id)
      .subscribe(() => this.loadPage(this.currentPage));
  }
}
