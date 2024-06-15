import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './home/home.module';
import { SirketModule } from './sirket/sirket.module';
import { UsersModule } from './users/users.module';







@NgModule({
    declarations: [   
           
  ],
  
    imports: [
        CommonModule,
        RouterModule,       
        LayoutsModule,
        HomeModule,  
        SirketModule,
        UsersModule   
    ],
    
})
export class ComponentsModule { }
