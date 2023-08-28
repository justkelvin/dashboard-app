import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatepieComponent } from './statepie.component';

describe('StatepieComponent', () => {
  let component: StatepieComponent;
  let fixture: ComponentFixture<StatepieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatepieComponent]
    });
    fixture = TestBed.createComponent(StatepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
