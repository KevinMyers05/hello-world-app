import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { BotNavBarComponent } from './navigation/bot-nav-bar/bot-nav-bar.component';
import { MainPageComponent } from './navigation/main-page/main-page.component';
import { MainPageSecondCardComponent } from './navigation/main-page-second-card/main-page-second-card.component';
import { CardGroupComponent } from './navigation/main-page/card-group/card-group.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BotNavBarComponent,
    MainPageComponent,
    MainPageSecondCardComponent,
    CardGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
