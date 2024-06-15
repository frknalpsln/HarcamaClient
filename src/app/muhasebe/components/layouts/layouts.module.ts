import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';
import {  LayoutsComponentMuhasebe } from './layouts.component';



@NgModule({
  declarations: [ LayoutsComponentMuhasebe , NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: LayoutsComponentMuhasebe },
      
  ]), 
], 
  exports : []
    
  
})
export class LayoutsModule { }
