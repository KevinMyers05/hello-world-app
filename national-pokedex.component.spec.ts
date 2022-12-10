import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalPokedexComponent } from './national-pokedex.component';

describe('NationalPokedexComponent', () => {
  let component: NationalPokedexComponent;
  let fixture: ComponentFixture<NationalPokedexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalPokedexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
