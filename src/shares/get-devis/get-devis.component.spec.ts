import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDevisComponent } from './get-devis.component';

describe('GetDevisComponent', () => {
  let component: GetDevisComponent;
  let fixture: ComponentFixture<GetDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDevisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
