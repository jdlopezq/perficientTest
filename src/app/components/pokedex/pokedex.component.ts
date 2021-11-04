import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  constructor(private router: Router) {}
  showFiller = false;
  ngOnInit(): void {}
  exit() {
    this.router.navigate(['login']);
  }
}
