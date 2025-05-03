// src/app/authorite/authority-edit.component.ts
import { Component, OnInit }           from '@angular/core';
import { CommonModule }                from '@angular/common';
import { FormsModule }                 from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

import { AuthoriteService, Authorite } from '../services/authority.service';
import { UserService, User }           from '../services/user.service';

@Component({
  standalone: true,
  selector: 'app-authority-edit',
  templateUrl: './authority-edit.component.html',
  styleUrls: ['./authority-edit.component.css'],
  imports: [ CommonModule, FormsModule, RouterModule ]
})
export class AuthorityEditComponent implements OnInit {
update() {
throw new Error('Method not implemented.');
}
  auth!: Authorite;
  users: User[] = [];

  constructor(
    private svc: AuthoriteService,
    private usvc: UserService,
    private route: ActivatedRoute,
    public  router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usvc.getUsers().subscribe(u => this.users = u);
    this.svc.getAuthorites()
      .subscribe(list => this.auth = list.find(a => a.id === id)!);
  }

  

  cancel() {
    this.router.navigate(['/authorites']);
  }
}
