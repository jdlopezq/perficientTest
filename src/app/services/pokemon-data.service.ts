import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PokemonDataService {
  constructor(private httpClient: HttpClient) {}
  private httpUrl = 'https://pokeapi.co/api/v2/';

  getPokemonList() {}

  getPokemon(pokemonId: number) {
    return this.httpClient.get(`${this.httpUrl}pokemon/${pokemonId}`).pipe(
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
}
