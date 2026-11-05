import { Component, ElementRef, afterRenderEffect, inject, input, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FOLDERS, FolderKey, folderColor } from '../../core/folders';
import { I18n } from '../../core/i18n/i18n';

@Component({
  selector: 'app-folder-tabs',
  imports: [RouterLink],
  templateUrl: './folder-tabs.html',
  styleUrl: './folder-tabs.css',
})
export class FolderTabs {
  protected readonly i18n = inject(I18n);
  protected readonly folders = FOLDERS;
  protected readonly color = folderColor;

  readonly active = input.required<FolderKey>();

  private readonly scroller = viewChild.required<ElementRef<HTMLElement>>('scroller');

  constructor() {
    // em telas estreitas as abas rolam na horizontal: mantém a aba ativa visível
    afterRenderEffect(() => {
      this.active();
      const scroller = this.scroller().nativeElement;
      const tab = scroller.querySelector<HTMLElement>('.tab.is-active');
      if (!tab) return;
      const left = tab.offsetLeft - (scroller.clientWidth - tab.offsetWidth) / 2;
      scroller.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    });
  }
}
