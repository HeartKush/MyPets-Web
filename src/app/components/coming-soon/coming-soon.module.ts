import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    ComingSoonRoutingModule,
    FormsModule
  ]
})
export class ComingSoonModule { }
