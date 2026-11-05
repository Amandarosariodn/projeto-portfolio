import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ProjetoDetalhe } from './projeto-detalhe';

describe('ProjetoDetalhe', () => {
  let fixture: ComponentFixture<ProjetoDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoDetalhe],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjetoDetalhe);
  });

  it('shows the project for the slug', async () => {
    fixture.componentRef.setInput('slug', 'bookfly');
    await fixture.whenStable();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('h1')?.textContent).toContain('BookFly');
    expect(root.querySelectorAll('.checklist li').length).toBe(6);
  });

  it('shows a message for an unknown slug', async () => {
    fixture.componentRef.setInput('slug', 'nao-existe');
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')).toBeNull();
  });
});
