import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { HomeModule } from './home/home.module';






@NgModule({
    declarations: [
     
      
    ],
  
    imports: [
        CommonModule,
        RouterModule,       
        LayoutsModule,
        HomeModule,
      
    ],
    
})
export class ComponentsModule { }
