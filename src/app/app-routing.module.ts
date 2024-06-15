import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { HomeComponentAdmin } from './admin/components/home/home.component';
import { LayoutsComponentAdmin } from './admin/components/layouts/layouts.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LayoutsComponentMuhasebe } from './muhasebe/components/layouts/layouts.component';

import { LayoutsComponentUi } from './ui/components/layouts/layouts.component';
import { HomeComponentMuhasebe } from './muhasebe/components/home/home.component';
import { HomeComponentUi } from './ui/components/home/home.component';
import { RegisterComponent } from './ui/components/register/register.component';
import { SirketComponent } from './admin/components/sirket/sirket.component';
import { UsersComponent } from './admin/components/users/users.component';


const routes: Routes = [


  { path: `login`, component: LoginComponent },

  {
    path: `admin`, component: LayoutsComponentAdmin, 
    canActivateChild: [() => inject(AuthService).isAuthenticated()],
    children: [
      { path: "", component: HomeComponentAdmin },
      {path : "sirket" , component : SirketComponent},
      {path : "users" , component : UsersComponent}

    ]
  },

  {
    path: `muhasebe`,
    component: LayoutsComponentMuhasebe,
    canActivateChild: [() => inject(AuthService).isAuthenticated()],
    children: [
      {
        path: "",
        component: HomeComponentMuhasebe
      },

    ]
  },

  {
    path: ``,
    component: LayoutsComponentUi,
    canActivateChild: [() => inject(AuthService).isAuthenticated()],
    children: [
      {
        path: "",
        component: HomeComponentUi
      },
      {
        path : "register",
        component : RegisterComponent
      }

    ]
  },



  { path: '*', component: NotFoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
