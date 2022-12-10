import { Component } from '@angular/core';
import { CardImagesModel } from './navigation/main-page/card-group/card_images_model';
import { mock_card_images } from './navigation/main-page/card-group/mock_card_images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';

  constructor(){
  }

}
