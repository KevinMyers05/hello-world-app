import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythicalComponent } from './mythical.component';

describe('MythicalComponent', () => {
  let component: MythicalComponent;
  let fixture: ComponentFixture<MythicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MythicalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MythicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
