import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  HomeComponentAdmin } from './home.component';



@NgModule({
  declarations: [HomeComponentAdmin],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: "", component: HomeComponentAdmin }])

  ],

  exports : []
})
export class HomeModule { }
