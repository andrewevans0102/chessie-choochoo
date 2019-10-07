import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalTimesComponent } from './arrival-times.component';
import { MaterialModule } from '../material/material.module';

describe('ArrivalTimesComponent', () => {
  let component: ArrivalTimesComponent;
  let fixture: ComponentFixture<ArrivalTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArrivalTimesComponent],
      imports: [MaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
