import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageSecondCardComponent } from './main-page-second-card.component';

describe('MainPageSecondCardComponent', () => {
  let component: MainPageSecondCardComponent;
  let fixture: ComponentFixture<MainPageSecondCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageSecondCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageSecondCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
