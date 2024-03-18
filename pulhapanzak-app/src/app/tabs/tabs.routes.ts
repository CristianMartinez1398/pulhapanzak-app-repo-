import { Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { AuthGuard } from '../auth/services/auth.guard';


export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'Home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'Gallery',
        loadComponent: () =>
          import('../gallery/gallery.component').then(
            (m) => m.GalleryComponent
          ),
      },
      {
        path: 'Profile',
        loadComponent: () =>
          import('../profile-page/profile-page.component').then(
            (m) => m.ProfilePageComponent
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full',
  },
];