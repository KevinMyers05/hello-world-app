import { Component, Input, OnInit } from '@angular/core';
import { PokeCardImagesModel } from './poke-card-group/poke-card_images_model';
import { mock_poke_card_images } from './poke-card-group/mock_poke_card_images';

@Component({
  selector: 'app-national-pokedex',
  templateUrl: './national-pokedex.component.html',
  styleUrls: ['./national-pokedex.component.css']
})
export class NationalPokedexComponent implements OnInit {
  @Input() images: PokeCardImagesModel [] = [];
  constructor() { 
    for(var image of mock_poke_card_images){
      console.log(image);
      this.images.push(image);
    }
  }

  ngOnInit(): void {
  }

}
