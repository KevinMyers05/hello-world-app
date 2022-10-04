import { Component , Input} from '@angular/core';
import { CardImagesModel } from './card-group/card_images_model';
import { mock_card_images } from './card-group/mock_card_images';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{
  
  @Input() conductcode: string;
  @Input() conductcode2: string;
  @Input() conductcode3: string;
  @Input() greeting: string;
  @Input() greeting3: string;
  @Input() greeting4: string;
  @Input() greeting5: string;
  @Input() greeting6: string;
  @Input() img: string;
  images: CardImagesModel [] = [];

  constructor() { 
    for(var image of mock_card_images){
      console.log(image);
      this.images.push(image);
    }
    this.conductcode = "Missing Description";
    this.conductcode2 = "Missing Description";
    this.conductcode3 = "Missing Description";
    this.greeting = "Missing Greeting";
    this.greeting3 = "Missing Greeting";
    this.greeting4 = "Missing Greeting";
    this.greeting5 = "Missing Greeting";
    this.greeting6 = "Missing Greeting";
    this.img = "";
  }

}
