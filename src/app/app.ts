import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';

import { FolderTabs } from './components/folder-tabs/folder-tabs';
import { FOLDERS, FolderKey, folderColor } from './core/folders';
import { I18n, Lang } from './core/i18n/i18n';
import { PROFILE } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FolderTabs],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);
  protected readonly i18n = inject(I18n);
  protected readonly profile = PROFILE;
  protected readonly langs: Lang[] = ['pt', 'en'];
  protected readonly year = new Date().getFullYear();

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );

  /** Pasta da frente, definida em `data.folder` de cada rota. */
  protected readonly active = computed<FolderKey>(() => {
    this.url();
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) route = route.firstChild;
    return (route.data['folder'] as FolderKey | undefined) ?? 'inicio';
  });

  protected readonly index = computed(() => FOLDERS.findIndex((f) => f.key === this.active()));

  /** Cores da pasta da frente e das duas que aparecem empilhadas atrás. */
  protected readonly colors = computed(() => {
    const i = this.index();
    const at = (offset: number) => folderColor(FOLDERS[(i + offset) % FOLDERS.length].key);
    return { front: at(0), back1: at(1), back2: at(2) };
  });

  protected readonly label = computed(() => {
    const number = String(this.index() + 1).padStart(2, '0');
    const total = String(FOLDERS.length).padStart(2, '0');
    return `${this.i18n.t('desk.folder')} ${number} / ${total} · ${this.i18n.t(FOLDERS[this.index()].label)}`;
  });
}
