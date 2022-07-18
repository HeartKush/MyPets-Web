import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from 'src/app/shared/shared.module';
 


@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ServicesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    PublicComponent
  ]
})
export class PublicModule { }
