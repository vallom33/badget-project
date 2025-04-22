import { Routes } from '@angular/router';

import { UserListComponent } from './pages/user-list.component';
import { UserEditComponent } from './pages/user-edit.component';
import { UserAddComponent } from './pages/user-add.component';

import { ProfileListComponent } from './pages/profile-list.component';
import { ProfileEditComponent } from './pages/profile-edit.component';

import { BadgeListComponent } from './pages/badge-list.component';
import { BadgeEditComponent } from './pages/badge-edit.component';

// Employees
import { EmployeListComponent } from './pages/employe-list.component';
import { EmployeEditComponent } from './pages/employe-edit.component';

// Authorities
import { AuthorityListComponent } from './pages/authority-list.component';
import { AuthorityEditComponent } from './pages/authority-edit.component';

// Permissions
import { PermissionListComponent } from './pages/permission-list.component';
import { PermissionEditComponent } from './pages/permission-edit.component';

// Lots
import { LotListComponent } from './pages/lot-list.component';
import { LotEditComponent } from './pages/lot-edit.component';

// Badge Status
import { BadgestatusListComponent } from './pages/badgestatus-list.component';
import { BadgestatusEditComponent } from './pages/badgestatus-edit.component';

export const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'user/add', component: UserAddComponent },

  { path: 'profile', component: ProfileListComponent },
  { path: 'profile/edit/:id', component: ProfileEditComponent },

  { path: 'badges', component: BadgeListComponent },
  { path: 'badges/edit/:id', component: BadgeEditComponent },

  // Employees
  { path: 'employes', component: EmployeListComponent },
  { path: 'employes/edit/:id', component: EmployeEditComponent },

  // Authorities
  { path: 'authorities', component: AuthorityListComponent },
  { path: 'authorities/edit/:id', component: AuthorityEditComponent },

  // Permissions
  { path: 'permissions', component: PermissionListComponent },
  { path: 'permissions/edit/:id', component: PermissionEditComponent },

  // Lots
  { path: 'lots', component: LotListComponent },
  { path: 'lots/edit/:id', component: LotEditComponent },

  // Badge Status
  { path: 'badgestatus', component: BadgestatusListComponent },
  { path: 'badgestatus/edit/:id', component: BadgestatusEditComponent },

  // Default and fallback
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: '**', redirectTo: '/user' }
];
