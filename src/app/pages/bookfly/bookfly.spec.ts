import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Bookfly } from './bookfly';

describe('Bookfly', () => {
  let component: Bookfly;
  let fixture: ComponentFixture<Bookfly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookfly],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Bookfly);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
