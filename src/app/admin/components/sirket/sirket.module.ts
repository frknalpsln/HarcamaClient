import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SirketComponent } from './sirket.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SirketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: SirketComponent },
      
  ]), FormsModule
  ]
})
export class SirketModule {

 }
