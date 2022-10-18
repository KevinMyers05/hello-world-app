export class PokeCardImagesModel {

    Pokemonimg: string;
    name: string;
    number: string;
    type: string;

    constructor(Pokemonimg: string, name: string, number: string, type: string, height: string){
        this.Pokemonimg = Pokemonimg;
        this.name = name;
        this.number = number;
        this.type = type;
    }

}