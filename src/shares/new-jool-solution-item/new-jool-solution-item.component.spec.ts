import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoolSolutionItemComponent } from './new-jool-solution-item.component';

describe('NewJoolSolutionItemComponent', () => {
  let component: NewJoolSolutionItemComponent;
  let fixture: ComponentFixture<NewJoolSolutionItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewJoolSolutionItemComponent]
    });
    fixture = TestBed.createComponent(NewJoolSolutionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
