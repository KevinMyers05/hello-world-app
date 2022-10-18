import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { BotNavBarComponent } from './navigation/bot-nav-bar/bot-nav-bar.component';
import { MainPageComponent } from './navigation/main-page/main-page.component';
import { MainPageSecondCardComponent } from './navigation/main-page-second-card/main-page-second-card.component';
import { CardGroupComponent } from './navigation/main-page/card-group/card-group.component';
import { NewsComponent } from './news/news.component';
import { ByNameComponent } from './by-name/by-name.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { NationalPokedexComponent } from './national-pokedex/national-pokedex.component';
import { ForumsComponent } from './forums/forums.component';
import { LegendaryComponent } from './legendary/legendary.component';
import { MythicalComponent } from './mythical/mythical.component';
import { EventPokemonComponent } from './event-pokemon/event-pokemon.component';
import { PokeCardGroupComponent } from './national-pokedex/poke-card-group/poke-card-group.component';
import { UserInfoComponent } from './navigation/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    BotNavBarComponent,
    MainPageComponent,
    MainPageSecondCardComponent,
    CardGroupComponent,
    NewsComponent,
    ByNameComponent,
    HomelayoutComponent,
    NationalPokedexComponent,
    ForumsComponent,
    LegendaryComponent,
    MythicalComponent,
    EventPokemonComponent,
    PokeCardGroupComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
