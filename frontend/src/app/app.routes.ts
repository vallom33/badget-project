import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/login.component';

import { UserListComponent } from './pages/user-list.component';
import { UserEditComponent } from './pages/user-edit.component';
import { UserAddComponent } from './pages/user-add.component';

import { ProfileListComponent } from './pages/profile-list.component';
import { ProfileEditComponent } from './pages/profile-edit.component';

import { BadgeListComponent } from './pages/badge-list.component';
import { BadgeEditComponent } from './pages/badge-edit.component';
import { BadgeAddComponent } from './pages/badge-add.component';


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
import { BadgeStatusListComponent } from './pages/badgestatus-list.component';
import { BadgestatusEditComponent } from './pages/badgestatus-edit.component';

export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  


  { path: 'user', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'user/edit/:id', component: UserEditComponent },
  { path: 'user/add', component: UserAddComponent },

  { path: 'profile', component: ProfileListComponent , canActivate: [AuthGuard]},
  { path: 'profile/edit/:id', component: ProfileEditComponent },

  { path: 'badges', component: BadgeListComponent , canActivate: [AuthGuard]},
  { path: 'badges/edit/:id', component: BadgeEditComponent },
  { path: 'badges/add', component: BadgeAddComponent },

  // Employees
  { path: 'employes', component: EmployeListComponent , canActivate: [AuthGuard]},
  { path: 'employes/edit/:id', component: EmployeEditComponent },

  // Authorities
  { path: 'authorities', component: AuthorityListComponent, canActivate: [AuthGuard] },
  { path: 'authorities/edit/:id', component: AuthorityEditComponent },

  // Permissions
  { path: 'permissions', component: PermissionListComponent, canActivate: [AuthGuard] },
  { path: 'permissions/edit/:id', component: PermissionEditComponent },

  // Lots
  { path: 'lots', component: LotListComponent, canActivate: [AuthGuard] },
  { path: 'lots/edit/:id', component: LotEditComponent },

  // Badge Status
  { path: 'badgestatus', component: BadgeStatusListComponent, canActivate: [AuthGuard] },
  { path: 'badgestatus/edit/:id', component: BadgestatusEditComponent },

  // Default and fallback
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
