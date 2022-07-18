import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { AsideDashboardComponent } from './aside-dashboard/aside-dashboard.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarDashboardComponent,
    AsideDashboardComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AppRoutingModule,
    NavbarDashboardComponent,
    AsideDashboardComponent
  ]
})
export class SharedModule { }
