import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Tile } from '@angular/material/grid-list/tile-coordinator';
import { Router } from '@angular/router';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons = [];
  filterForm: FormGroup;
  displayedColumns = ['position', 'name', 'picture'];
  dataSource;
  
  constructor(
    private pokemonData: PokemonDataService,
    private router: Router,
    private dataService: DataService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pokemonData.getCoutedPokemonList(0,150).subscribe((data) => {
      this.pokemons = data.results;
      this.pokemons.forEach((pokemon, index) => {
        this.pokemonData
          .getPokemonByName(pokemon.name)
          .subscribe((data: any) => {
            this.pokemons[index]['data'] = data;
            this.pokemons[index]['id'] = data.id;
            this.pokemons[index]['image'] = data.sprites.front_default;
            this.pokemons[index]['imagePokedex'] =
              data.sprites.other.dream_world.front_default;
            this.pokemons[index]['types'] = [];
            data.types.forEach((element) => {
              this.pokemons[index]['types'].push(element.type.name);
            });
          });
      });
      this.dataSource = new MatTableDataSource(this.pokemons)
    });
  }
  selectPokemon(pokemon) {
    this.dataService.sendPokemon(pokemon);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  SendPokemonQuery() {}
}
