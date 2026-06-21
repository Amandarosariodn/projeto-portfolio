import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookfly } from './bookfly';

describe('Bookfly', () => {
  let component: Bookfly;
  let fixture: ComponentFixture<Bookfly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookfly],
    }).compileComponents();

    fixture = TestBed.createComponent(Bookfly);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
