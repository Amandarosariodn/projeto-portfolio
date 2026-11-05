import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiencia } from './experiencia';
import { EXPERIENCES } from '../../data/portfolio.data';

describe('Experiencia', () => {
  let fixture: ComponentFixture<Experiencia>;
  let root: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Experiencia] }).compileComponents();
    fixture = TestBed.createComponent(Experiencia);
    root = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('renders one card per company, with every role inside it', () => {
    expect(root.querySelectorAll('.index-card').length).toBe(EXPERIENCES.length);
    const totalRoles = EXPERIENCES.reduce((sum, exp) => sum + exp.roles.length, 0);
    expect(root.querySelectorAll('.role').length).toBe(totalRoles);
  });

  it('marks a promotion between consecutive roles at the same company', () => {
    const promotions = EXPERIENCES.reduce((sum, exp) => sum + exp.roles.length - 1, 0);
    expect(root.querySelectorAll('.promotion').length).toBe(promotions);
  });

  it('shows achievements apart from the regular highlights', () => {
    const achievements = EXPERIENCES.flatMap((exp) => exp.roles).flatMap((r) => r.achievements ?? []);
    expect(root.querySelectorAll('.achievements li').length).toBe(achievements.length);
  });
});
