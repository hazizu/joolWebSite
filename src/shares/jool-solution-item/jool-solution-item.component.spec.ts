import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoolSolutionItemComponent } from './jool-solution-item.component';

describe('JoolSolutionItemComponent', () => {
  let component: JoolSolutionItemComponent;
  let fixture: ComponentFixture<JoolSolutionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoolSolutionItemComponent]
    });
    fixture = TestBed.createComponent(JoolSolutionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
