import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEtDevComponent } from './recherche-et-dev.component';

describe('RechercheEtDevComponent', () => {
  let component: RechercheEtDevComponent;
  let fixture: ComponentFixture<RechercheEtDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheEtDevComponent]
    });
    fixture = TestBed.createComponent(RechercheEtDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
