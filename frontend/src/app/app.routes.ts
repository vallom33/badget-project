import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { BadgeComponent } from './badge/badge.component';
import { SettingsComponent } from './settings/settings.component';

// Employees
import { ListComponent as EmployeListComponent } from './pages/employes/list/list.component';
import { EditComponent as EmployeEditComponent } from './pages/employes/edit/edit.component';

// Authorities
import { ListComponent as AuthorityListComponent } from './pages/authorities/list/list.component';
import { EditComponent as AuthorityEditComponent } from './pages/authorities/edit/edit.component';

// Permissions
import { ListComponent as PermissionListComponent } from './pages/permissions/list/list.component';
import { EditComponent as PermissionEditComponent } from './pages/permissions/edit/edit.component';

// Lots
import { ListComponent as LotListComponent } from './pages/lots/list/list.component';
import { EditComponent as LotEditComponent } from './pages/lots/edit/edit.component';

// Badge Status
import { ListComponent as BadgeStatusListComponent } from './pages/badge-status/list/list.component';
import { EditComponent as BadgeStatusEditComponent } from './pages/badge-status/edit/edit.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'badges', component: BadgeComponent },
  { path: 'settings', component: SettingsComponent },

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
  { path: 'badge-status', component: BadgeStatusListComponent },
  { path: 'badge-status/edit/:id', component: BadgeStatusEditComponent },

  // Default and fallback
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
