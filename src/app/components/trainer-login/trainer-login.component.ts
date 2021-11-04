import { PokemonDataService } from './../../services/pokemon-data.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-trainer-login',
  templateUrl: './trainer-login.component.html',
  styleUrls: ['./trainer-login.component.css'],
})
export class TrainerLoginComponent implements OnInit {
  public pokemonImgUrl: string;
  public loginForm: FormGroup;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private pokemonData: PokemonDataService,
    private router: Router,
    private _auth: AuthService
  ) {}

  ngOnInit(): void {
    this.pokemonData
      .getPokemonImage(Math.floor(Math.random() * 300) + 1)
      .subscribe((url) => {
        this.pokemonImgUrl = url;
      });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this._auth.SignIn(this.loginForm.value.email, this.loginForm.value.password)
  }
  register() {
    this.router.navigate(['register']);
  }
}
