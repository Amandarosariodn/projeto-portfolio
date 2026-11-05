import { Component, inject, viewChildren } from '@angular/core';

import { I18n } from '../../core/i18n/i18n';
import { TranslationKey } from '../../core/i18n/translations';
import { TECHNOLOGIES, TechGroup } from '../../data/portfolio.data';
import { Draggable } from '../../shared/draggable';

const ROTATIONS = [-4, 3, -2, 5, -3, 2, -5, 4, -2, 6];

@Component({
  selector: 'app-stack',
  imports: [Draggable],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
  host: { class: 'panel' },
})
export class Stack {
  protected readonly i18n = inject(I18n);
  protected readonly technologies = TECHNOLOGIES;
  protected readonly groups: { key: TechGroup; label: TranslationKey }[] = [
    { key: 'front', label: 'stack.front' },
    { key: 'back', label: 'stack.back' },
    { key: 'data', label: 'stack.data' },
    { key: 'tools', label: 'stack.tools' },
    { key: 'arch', label: 'stack.arch' },
  ];

  private readonly stickers = viewChildren(Draggable);

  protected rotation(index: number): string {
    return `${ROTATIONS[index % ROTATIONS.length]}deg`;
  }

  protected tidy(): void {
    this.stickers().forEach((sticker) => sticker.reset());
  }
}
