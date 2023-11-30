import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contador',
    title: 'Contador',
    loadComponent: () => import('./contador/contador.component')
  },
  {
    path: 'heroe',
    title: 'Heroe',
    loadComponent: () => import('./heroes/components/heroe/heroe.component')
  },
  {
    path: 'heroe-list',
    title: 'Listado de Heroes',
    loadComponent: () => import('./heroes/components/listado/listado.component')
  },
  {
    path: 'dbz',
    title: 'Dbz',
    loadComponent: () => import('./dbz/pages/main-page/main-page.component')
  },
  {
    path: '**',
    redirectTo: '/contador'
  }
];
