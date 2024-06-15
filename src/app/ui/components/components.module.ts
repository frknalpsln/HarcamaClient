import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';






@NgModule({
    declarations: [   
      
    
    
  ],
  
    imports: [
        CommonModule,
        RouterModule,       
        LayoutsModule,
        HomeModule,
        RegisterModule
 
      
    ],
    
})
export class ComponentsModule { }
