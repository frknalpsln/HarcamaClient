import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormValidateDirective } from 'form-validate-angular';



@NgModule({
  declarations: [LayoutsComponent , 
    HomeComponent, 
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, FormValidateDirective
  ]
})
export class ComponentsModule { }
