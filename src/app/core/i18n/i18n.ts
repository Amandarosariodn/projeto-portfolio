import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

import { TRANSLATIONS, TranslationKey } from './translations';

export type Lang = 'pt' | 'en';

/** Texto que existe nos dois idiomas (usado nos dados do portfólio). */
export interface Localized {
  pt: string;
  en: string;
}

const STORAGE_KEY = 'portfolio.lang';

@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.readStoredLang());

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // sem localStorage (aba anônima, etc.): o idioma só não fica salvo
      }
    });
  }

  t(key: TranslationKey): string {
    return TRANSLATIONS[this.lang()][key];
  }

  pick(value: Localized): string {
    return value[this.lang()];
  }

  /** "mar 2025" / "Mar 2025" a partir de "2025-03". */
  month(isoMonth: string): string {
    const [year, month] = isoMonth.split('-').map(Number);
    const name = new Intl.DateTimeFormat(this.lang() === 'pt' ? 'pt-BR' : 'en', { month: 'short' })
      .format(new Date(year, month - 1))
      .replace('.', '');
    return `${name} ${year}`;
  }

  private readStoredLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'pt' || stored === 'en') return stored;
    } catch {
      // ignora e usa o padrão
    }
    return 'pt';
  }
}
