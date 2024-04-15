import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'artists',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../homePage/home.page').then((m) => m.HomePage),
      },
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
          import('../addArtist/addArtist.page').then((m) => m.AddArtistPage),
      },
      {
        path: 'privacy',
        loadComponent: () =>
          import('../privacyPage/privacy.page').then((m) => m.PrivacyPage),
      },
      {
        path: ':name',
        loadComponent: () =>
          import('../artistDetailPage/artistDetail.page').then((m) => m.ArtistDetailPage),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'artists/home',
    pathMatch: 'full',
  },
];
