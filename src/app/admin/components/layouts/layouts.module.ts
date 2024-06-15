import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutsComponentAdmin } from './layouts.component';



@NgModule({
  declarations: [ LayoutsComponentAdmin , NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: LayoutsComponentAdmin },
      
  ]), 
], 
  exports : []
    
  
})
export class LayoutsModule { }
