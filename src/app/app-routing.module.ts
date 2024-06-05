import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [

  {
    path: 'login', loadChildren: () => import("./components/login/login.module").then(module => module.LoginModule)
  },


  {
    path : "", 
    component : LayoutsComponent,
    canActivateChild : [() => inject(AuthService).isAuthenticated()],
    children : [
      {
        path : "",
        component : HomeComponent
      }
    ]
  },
  
  { path: 'not-found', component: NotFoundComponent },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
