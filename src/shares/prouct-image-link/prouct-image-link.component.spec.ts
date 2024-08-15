import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctImageLinkComponent } from './prouct-image-link.component';

describe('ProuctImageLinkComponent', () => {
  let component: ProuctImageLinkComponent;
  let fixture: ComponentFixture<ProuctImageLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProuctImageLinkComponent]
    });
    fixture = TestBed.createComponent(ProuctImageLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
