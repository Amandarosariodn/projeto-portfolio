import { Component, inject } from '@angular/core';

import { I18n } from '../../core/i18n/i18n';
import { FUN_FACTS } from '../../data/portfolio.data';

const ROTATIONS = [-3, 2, -1.5, 3, -2.5, 1.5];
const PIN_COLORS = ['#c8324a', '#3d5af1', '#1d1b26', '#2f9e6b'];

@Component({
  selector: 'app-curiosidades',
  templateUrl: './curiosidades.html',
  styleUrl: './curiosidades.css',
  host: { class: 'panel' },
})
export class Curiosidades {
  protected readonly i18n = inject(I18n);
  protected readonly facts = FUN_FACTS;

  protected rotation(index: number): string {
    return `${ROTATIONS[index % ROTATIONS.length]}deg`;
  }

  protected pin(index: number): string {
    return PIN_COLORS[index % PIN_COLORS.length];
  }
}
