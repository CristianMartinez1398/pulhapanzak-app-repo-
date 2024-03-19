import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AuthGuard } from './auth/services/auth.guard';


export const routes: Routes = [
  
  {
    path: 'login',
    loadComponent: () => import('./login-page/login-page.component').then((m) => m.LoingPageComponent),
  },
  {
    path: 'registro',
    loadComponent: () => import('./register-page/register-page.component').then((m) => m.RegisterPageComponent),
  },
  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
    canActivate: [() => inject(AuthGuard).canActivate()],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
