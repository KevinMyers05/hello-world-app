import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card-group',
  templateUrl: './poke-card-group.component.html',
  styleUrls: ['./poke-card-group.component.css']
})
export class PokeCardGroupComponent implements OnInit {

  @Input() Pokemonimg: string;
  @Input() name: string;
  @Input() number: string;
  @Input() type: string;

  constructor() { 
    this.Pokemonimg = "";
    this.name = "";
    this.number = "";
    this.type = "";
  }
  ngOnInit(): void {
  }

}
