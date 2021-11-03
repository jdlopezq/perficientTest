import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  constructor(private dataService: DataService) {}
  public pokemonDetails;
  public pokemonMovements= [];
  public pokemonStats={}
  pokemonTypes
  ngOnInit(): void {
    this.dataService.getPokemon().subscribe((pokemon) => {
      console.log(pokemon);
      this.pokemonMovements=[]
      this.pokemonDetails = pokemon;
      this.pokemonTypes=pokemon?.types
      this.pokemonStats['height']=pokemon?.data.height
      this.pokemonStats['weight']=pokemon?.data.weight
      pokemon?.data.abilities.forEach((element) => {
        this.pokemonMovements.push(element.ability.name);
      });
    });
  }
}
