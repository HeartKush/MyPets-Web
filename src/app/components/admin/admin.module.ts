import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
