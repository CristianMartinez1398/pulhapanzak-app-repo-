import { Routes } from '@angular/router';

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
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full',
  },
];
