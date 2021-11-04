import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  showFiller = false;
  ngOnInit(): void {}
  exit() {
    this.authService.SignOut().then(()=>this.router.navigate(['login']))
  }
}
