import { MaterialModule } from '../app/shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { TrainerRegisterComponent } from './components/trainer-register/trainer-register.component';
import { TrainerLoginComponent } from './components/trainer-login/trainer-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokedexComponent,
    TrainerRegisterComponent,
    TrainerLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
