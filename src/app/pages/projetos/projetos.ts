import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { I18n } from '../../core/i18n/i18n';
import { PROFILE, PROJECTS } from '../../data/portfolio.data';

@Component({
  selector: 'app-projetos',
  imports: [RouterLink],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
  host: { class: 'panel' },
})
export class Projetos {
  protected readonly i18n = inject(I18n);
  protected readonly projects = PROJECTS;
  protected readonly github = PROFILE.github;
}
