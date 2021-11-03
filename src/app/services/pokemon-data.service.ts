import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
  private httpUrl = 'https://pokeapi.co/api/v2/';

getPokemonList(){
  
}


}
