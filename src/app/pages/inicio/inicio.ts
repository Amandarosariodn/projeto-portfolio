import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18n } from '../../core/i18n/i18n';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  host: { class: 'panel' },
})
export class Inicio {
  protected readonly i18n = inject(I18n);
}
