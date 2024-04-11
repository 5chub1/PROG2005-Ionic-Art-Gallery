import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'artists',
        loadComponent: () =>
          import('../allArtistsPage/allArtists.page').then((m) => m.AllArtistsPage),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'artists/:name',
        loadComponent: () =>
          import('../artistDetailPage/artistDetail.page').then((m) => m.ArtistDetailPage),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'artists',
    pathMatch: 'full',
  },
];
