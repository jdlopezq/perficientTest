import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PokemonDataService {
  constructor(private httpClient: HttpClient) {}
  private httpUrl = 'https://pokeapi.co/api/v2/';

  getPokemonList() {}

  getPokemonById(pokemonId: number) {
    return this.httpClient.get(`${this.httpUrl}pokemon/${pokemonId}`).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
  getPokemonByName(pokemonName: string) {
    return this.httpClient.get(`${this.httpUrl}pokemon/${pokemonName}`).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
  getPokemonImage(pokemonId: number) {
    return this.httpClient.get(`${this.httpUrl}pokemon/${pokemonId}`).pipe(
      map((response: any) => {
        let imgUrl = response.sprites.other.dream_world.front_default;
        return imgUrl;
      })
    );
  }
  getCoutedPokemonList(offset:number=0, limit:number=10){
    return this.httpClient.get(`${this.httpUrl}pokemon?limit=${limit}&offset=${offset}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  getPokemonFixedList(queryUrl){
    return this.httpClient.get(`${queryUrl}`).pipe(
      map((response: any) => {
        let imgUrl = response.sprites.other.dream_world.front_default;
        return imgUrl;
      })
    );
  }
}
