import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18n } from '../../core/i18n/i18n';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-sobre',
  imports: [RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
  host: { class: 'panel' },
})
export class Sobre {
  protected readonly i18n = inject(I18n);
  protected readonly education = PROFILE.education;
}
