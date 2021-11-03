import { PokedexComponent } from './components/pokedex/pokedex.component';
import { TrainerRegisterComponent } from './components/trainer-register/trainer-register.component';
import { TrainerLoginComponent } from './components/trainer-login/trainer-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: TrainerLoginComponent },
  { path: 'register', component: TrainerRegisterComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
