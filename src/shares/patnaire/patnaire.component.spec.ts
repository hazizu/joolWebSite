import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnaireComponent } from './patnaire.component';

describe('PatnaireComponent', () => {
  let component: PatnaireComponent;
  let fixture: ComponentFixture<PatnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatnaireComponent]
    });
    fixture = TestBed.createComponent(PatnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
