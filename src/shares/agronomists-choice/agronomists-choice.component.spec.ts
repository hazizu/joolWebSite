import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgronomistsChoiceComponent } from './agronomists-choice.component';

describe('AgronomistsChoiceComponent', () => {
  let component: AgronomistsChoiceComponent;
  let fixture: ComponentFixture<AgronomistsChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgronomistsChoiceComponent]
    });
    fixture = TestBed.createComponent(AgronomistsChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
