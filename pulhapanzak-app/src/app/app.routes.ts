import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Registro',
    loadComponent: () => import('./register-page/register-page.component').then((m) => m.RegisterPageComponent),
  },
  {
    path: '',
    redirectTo: 'Registro',
    pathMatch: 'full',
  },
];
