import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { BulbaProductComponent } from './bulba-product/bulba-product.component';
import { ByNameComponent } from './by-name/by-name.component';
import { EventPokemonComponent } from './event-pokemon/event-pokemon.component';
import { ForumsComponent } from './forums/forums.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { LegendaryComponent } from './legendary/legendary.component';
import { MythicalComponent } from './mythical/mythical.component';
import { NationalPokedexComponent } from './national-pokedex/national-pokedex.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: '', component: HomelayoutComponent},
  {path: "by-name", component: ByNameComponent},
  {path: "home", component:HomelayoutComponent},
  {path: "national-pokedex", component:NationalPokedexComponent},
  {path: "legendary", component:LegendaryComponent},
  {path: "mythical", component:MythicalComponent},
  {path: "event-pokemon", component:EventPokemonComponent},
  {path: "admin", component:BulbaProductComponent},
  {path: 'auth',component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
