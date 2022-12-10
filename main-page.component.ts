import { Component , Input, OnInit} from '@angular/core';
import { CardImagesModel } from './card-group/card_images_model';
import { mock_card_images } from './card-group/mock_card_images';
import { MainPageservice } from './main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  
  images: CardImagesModel [] = [];

  constructor(private mainPageservice:MainPageservice) { 
  }
  
  ngOnInit(): void {
    this.mainPageservice.getMainPage().subscribe((data: CardImagesModel []) => {
      console.log("Fetching ads");
      for(var image of data){
        console.log(image);
        this.images.push(image);
      }
    });
  }

}
