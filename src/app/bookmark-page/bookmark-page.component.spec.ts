import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkPageComponent } from './bookmark-page.component';
import { HeaderComponent } from '../header/header.component';
import { ArrivalTimesComponent } from '../arrival-times/arrival-times.component';
import { MaterialModule } from '../material/material.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookmarkPageComponent', () => {
  let component: BookmarkPageComponent;
  let fixture: ComponentFixture<BookmarkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookmarkPageComponent,
        HeaderComponent,
        ArrivalTimesComponent
      ],
      imports: [MaterialModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
