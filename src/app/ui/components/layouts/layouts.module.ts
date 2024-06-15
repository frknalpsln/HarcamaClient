import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../../shared/components/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {  LayoutsComponentUi } from './layouts.component';



@NgModule({
  declarations: [ LayoutsComponentUi , NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: LoginComponent },
      
  ]), 
], 
  exports : []
    
  
})
export class LayoutsModule { }
