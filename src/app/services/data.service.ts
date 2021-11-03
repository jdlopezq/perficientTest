import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private selectedPokemon = new BehaviorSubject(null);

  sendPokemon(e) {
    console.log(e)
    this.selectedPokemon.next(e);
  }

  getPokemon(): Observable<any> {
    return this.selectedPokemon.asObservable();
  }

}
