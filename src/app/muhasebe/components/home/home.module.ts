import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  HomeComponentMuhasebe } from './home.component';



@NgModule({
  declarations: [HomeComponentMuhasebe],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: "", component: HomeComponentMuhasebe }])

  ],

  exports : []
})
export class HomeModule { }
