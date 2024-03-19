import { Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';



export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('../gallery/gallery.component').then(
            (m) => m.GalleryComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile-page/profile-page.component').then(
            (m) => m.ProfilePageComponent
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];