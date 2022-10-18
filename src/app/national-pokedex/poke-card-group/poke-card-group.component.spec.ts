import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardGroupComponent } from './poke-card-group.component';

describe('PokeCardGroupComponent', () => {
  let component: PokeCardGroupComponent;
  let fixture: ComponentFixture<PokeCardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCardGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
