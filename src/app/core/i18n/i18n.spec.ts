import { TestBed } from '@angular/core/testing';

import { I18n } from './i18n';
import { TRANSLATIONS } from './translations';

describe('I18n', () => {
  let i18n: I18n;

  beforeEach(() => {
    try {
      localStorage.removeItem('portfolio.lang');
    } catch {
      // alguns Node expõem um localStorage incompleto; o serviço já lida com isso
    }
    i18n = TestBed.inject(I18n);
  });

  it('starts in Portuguese', () => {
    expect(i18n.lang()).toBe('pt');
    expect(i18n.t('nav.projetos')).toBe('projetos');
  });

  it('switches every lookup when the language changes', () => {
    i18n.lang.set('en');
    expect(i18n.t('nav.projetos')).toBe('projects');
    expect(i18n.pick({ pt: 'olá', en: 'hello' })).toBe('hello');
  });

  it('has the same keys in both languages', () => {
    expect(Object.keys(TRANSLATIONS.en).sort()).toEqual(Object.keys(TRANSLATIONS.pt).sort());
  });

  it('formats months for the active language', () => {
    expect(i18n.month('2025-03')).toBe('mar 2025');
    i18n.lang.set('en');
    expect(i18n.month('2025-03')).toBe('Mar 2025');
  });
});
