import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsPageComponent } from './recents-page.component';
import { HeaderComponent } from '../header/header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecentsPageComponent', () => {
  let component: RecentsPageComponent;
  let fixture: ComponentFixture<RecentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecentsPageComponent, HeaderComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
