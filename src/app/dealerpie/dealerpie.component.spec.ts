import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerpieComponent } from './dealerpie.component';

describe('DealerpieComponent', () => {
  let component: DealerpieComponent;
  let fixture: ComponentFixture<DealerpieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DealerpieComponent]
    });
    fixture = TestBed.createComponent(DealerpieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
