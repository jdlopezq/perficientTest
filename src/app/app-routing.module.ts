import { AuthGuard } from './shared/guard/auth.guard';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { TrainerRegisterComponent } from './components/trainer-register/trainer-register.component';
import { TrainerLoginComponent } from './components/trainer-login/trainer-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: TrainerLoginComponent },
  { path: 'register', component: TrainerRegisterComponent },
  { path: 'pokedex', component: PokedexComponent, canActivate: [AuthGuard] },
  {path: 'list', component: PokemonListComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
