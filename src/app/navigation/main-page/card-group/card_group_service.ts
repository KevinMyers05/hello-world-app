import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardImagesModel } from "./card_images_model";

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
}