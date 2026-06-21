import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Contato } from './pages/contato/contato';
import { Bookfly } from './pages/bookfly/bookfly';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    component: Sobre,
  },
  {
    path: 'contato',
    component: Contato,
  },
  {
    path: 'projetos/bookfly',
    component: Bookfly,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
