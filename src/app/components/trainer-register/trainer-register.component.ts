import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonDataService } from 'src/app/services/pokemon-data.service';

@Component({
  selector: 'app-trainer-register',
  templateUrl: './trainer-register.component.html',
  styleUrls: ['./trainer-register.component.css'],
})
export class TrainerRegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private pokemonData: PokemonDataService,
    private router: Router
  ) {}
  public pokemonImgUrl: string;
  public registerForm: FormGroup;
  ngOnInit(): void {
    this.pokemonData
      .getPokemonImage(Math.floor(Math.random() * 300) + 1)
      .subscribe((url) => {
        this.pokemonImgUrl = url;
      });
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  SendTrainerInfo() {

    
  }

  cancel() {
    this.router.navigate(['login'])
  }
}
