import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports: [
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    MatTabsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    MatTabsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
})
export class MaterialModule {}
