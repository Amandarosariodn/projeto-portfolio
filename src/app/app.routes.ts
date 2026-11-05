import { Routes } from '@angular/router';

import { FolderKey } from './core/folders';

const folder = (key: FolderKey) => ({ folder: key });

export const routes: Routes = [
  {
    path: '',
    title: 'Amanda Rosario · .NET & Angular',
    data: folder('inicio'),
    loadComponent: () => import('./pages/inicio/inicio').then((m) => m.Inicio),
  },
  {
    path: 'sobre',
    title: 'Sobre · Amanda Rosario',
    data: folder('sobre'),
    loadComponent: () => import('./pages/sobre/sobre').then((m) => m.Sobre),
  },
  {
    path: 'projetos',
    title: 'Projetos · Amanda Rosario',
    data: folder('projetos'),
    loadComponent: () => import('./pages/projetos/projetos').then((m) => m.Projetos),
  },
  {
    path: 'projetos/:slug',
    title: 'Projeto · Amanda Rosario',
    data: folder('projetos'),
    loadComponent: () =>
      import('./pages/projeto-detalhe/projeto-detalhe').then((m) => m.ProjetoDetalhe),
  },
  {
    path: 'experiencia',
    title: 'Experiência · Amanda Rosario',
    data: folder('experiencia'),
    loadComponent: () => import('./pages/experiencia/experiencia').then((m) => m.Experiencia),
  },
  {
    path: 'stack',
    title: 'Stack · Amanda Rosario',
    data: folder('stack'),
    loadComponent: () => import('./pages/stack/stack').then((m) => m.Stack),
  },
  {
    path: 'curiosidades',
    title: 'Curiosidades · Amanda Rosario',
    data: folder('curiosidades'),
    loadComponent: () => import('./pages/curiosidades/curiosidades').then((m) => m.Curiosidades),
  },
  {
    path: 'contato',
    title: 'Contato · Amanda Rosario',
    data: folder('contato'),
    loadComponent: () => import('./pages/contato/contato').then((m) => m.Contato),
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
