import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    try {
      localStorage.removeItem('portfolio.lang');
    } catch {
      // alguns Node expõem um localStorage incompleto; o serviço já lida com isso
    }
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes, withComponentInputBinding())],
    }).compileComponents();
  });

  it('renders one tab per folder', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const tabs = (fixture.nativeElement as HTMLElement).querySelectorAll('.tab');
    expect(tabs.length).toBe(7);
  });

  it('brings the folder of the current route to the front', async () => {
    const harness = await RouterTestingHarness.create();
    const fixture = TestBed.createComponent(App);
    await harness.navigateByUrl('/projetos/bookfly');
    fixture.detectChanges();
    await fixture.whenStable();

    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('.tab.is-active')?.textContent).toContain('projetos');
    expect(root.querySelector('.folder-label')?.textContent).toContain('03 / 07');
  });

  it('translates the tabs when switching to English', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;

    (root.querySelectorAll('.lang button')[1] as HTMLButtonElement).click();
    await fixture.whenStable();

    expect(root.querySelector('.tabs')?.textContent).toContain('experience');
  });
});
