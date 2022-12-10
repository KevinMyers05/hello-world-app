import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PokeCardImagesModel } from "src/app/national-pokedex/poke-card-group/poke-card_images_model";
import { CardImagesModel } from "./card_images_model";
//import {AngularFireDatabase} from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)

export class CardGroupservice{
    private baseUrl:string = "https://bulbapedia-235e6-default-rtdb.firebaseio.com/";
    private mainpageEndpoint:string ="card%20images.json";

    constructor(private http:HttpClient){

    }

    getCardGroup() {
        return this.http.get<CardImagesModel []>(this.baseUrl + this.mainpageEndpoint);
    }

    getCardGrou(index:number){
        return this.http.get<CardImagesModel []>(this.baseUrl + 'card%20images' + '/' + index + '.json');
    }

    //bulbaAdd(pokemon: PokeCardImagesModel){
        //this.db.list<PokeCardImagesModel>("pokemon").push(pokemon);
    //}
}