import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AuthGuard } from './auth/services/auth.guard';

export const routes: Routes = [
  
  {
    path: 'Login',
    loadComponent: () => import('./login-page/login-page.component').then((m) => m.LoingPageComponent),
  },
  {
    path: 'Registro',
    loadComponent: () => import('./register-page/register-page.component').then((m) => m.RegisterPageComponent),
  },
  {
    path: 'Perfil',
    loadComponent: () => import('./profile-page/profile-page.component').then((m) => m.ProfilePageComponent),
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    canActivate: [() => inject(AuthGuard).canActivate()],
  },
  {
    path: '**',
    redirectTo: 'Login',
    pathMatch: 'full',
  },
];
