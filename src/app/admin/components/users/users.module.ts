import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersPipe } from '../pipe/users.pipe';
import { FormValidateDirective } from 'form-validate-angular';



@NgModule({
  declarations: [UsersComponent , UsersPipe],
  imports: [
    CommonModule ,
    RouterModule.forChild([
      { path: "", component: UsersComponent },
      
  ]), FormsModule , FormValidateDirective

  ]
})
export class UsersModule { }
