import { Component, OnInit } from '@angular/core';
import { PokeCardImagesModel } from '../national-pokedex/poke-card-group/poke-card_images_model';
import { CardGroupservice } from '../navigation/main-page/card-group/card_group_service';

@Component({
  selector: 'fm-bulba-product',
  templateUrl: './bulba-product.component.html',
  styleUrls: ['./bulba-product.component.css']
})
export class BulbaProductComponent implements OnInit {
[x: string]: any;

  constructor(private ps:CardGroupservice) { }

  ngOnInit(): void {
  }

  bulbaAdd(product:PokeCardImagesModel){
    console.log("You clicked add Pokemon");
    console.log(product);
    //this.ps.bulbaAdd(product);
  }

}
