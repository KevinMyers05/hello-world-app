import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPokemonComponent } from './event-pokemon.component';

describe('EventPokemonComponent', () => {
  let component: EventPokemonComponent;
  let fixture: ComponentFixture<EventPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
