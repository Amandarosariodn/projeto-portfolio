import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18n } from '../../core/i18n/i18n';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projeto-detalhe',
  imports: [RouterLink],
  templateUrl: './projeto-detalhe.html',
  styleUrl: './projeto-detalhe.css',
  host: { class: 'panel' },
})
export class ProjetoDetalhe {
  protected readonly i18n = inject(I18n);

  /** Vem do parâmetro :slug da rota (withComponentInputBinding). */
  readonly slug = input.required<string>();

  protected readonly project = computed(() => PROJECTS.find((p) => p.slug === this.slug()));
}
