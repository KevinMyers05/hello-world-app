import { Component, Input} from '@angular/core';

@Component({
  selector: 'main-page-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent{

  @Input() ad: string;

  constructor() { 
    this.ad = "";
  }

}
