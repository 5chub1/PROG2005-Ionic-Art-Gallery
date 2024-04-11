import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'artists',
    component: TabsPage,
    children: [
      {
        path: 'all',
        loadComponent: () =>
          import('../allArtistsPage/allArtists.page').then((m) => m.AllArtistsPage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: ':name',
        loadComponent: () =>
          import('../artistDetailPage/artistDetail.page').then((m) => m.ArtistDetailPage),
      }
    ],
  },
  {
    path: '',
    redirectTo: 'artists',
    pathMatch: 'full',
  },
];
