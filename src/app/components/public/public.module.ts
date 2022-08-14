import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

 


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule


  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
