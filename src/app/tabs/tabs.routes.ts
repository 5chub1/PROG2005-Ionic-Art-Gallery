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
          import('../searchArtistsPage/searchArtists.page').then((m) => m.SearchArtistsPage),
      },
      {
        path: 'add',
        loadComponent: () =>
          import('../searchArtistsPage/searchArtists.page').then((m) => m.SearchArtistsPage),
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
