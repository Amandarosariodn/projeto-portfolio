import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';

import { I18n } from '../../core/i18n/i18n';
import { EXPERIENCES, Experience } from '../../data/portfolio.data';

@Component({
  selector: 'app-experiencia',
  imports: [NgTemplateOutlet],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css',
  host: { class: 'panel' },
})
export class Experiencia {
  protected readonly i18n = inject(I18n);
  protected readonly experiences = EXPERIENCES;

  /** Período total na empresa: início do primeiro cargo → fim do último (ou "hoje"). */
  protected span(exp: Experience): { start: string | null; end: string | null } {
    const first = exp.roles[exp.roles.length - 1];
    const last = exp.roles[0];
    return { start: first?.start ?? null, end: exp.current ? null : (last?.end ?? null) };
  }
}
