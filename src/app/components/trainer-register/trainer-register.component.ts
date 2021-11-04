import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
    private router: Router,
    public authService: AuthService
  ) {}
  public pokemonImgUrl: string;
  public registerForm: FormGroup;
  public singedUp = false;
  hide = true;
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
    this.authService
      .SignUp(this.registerForm.value.email, this.registerForm.value.password)
      .then(() => (this.singedUp = true));
  }

  cancel() {
    this.router.navigate(['login']);
  }
}
