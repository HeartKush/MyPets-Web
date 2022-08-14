import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarDashboardComponent } from './navbar-dashboard/navbar-dashboard.component';
import { AsideDashboardComponent } from './aside-dashboard/aside-dashboard.component';
import { SidebarHomeComponent } from './sidebar-home/sidebar-home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarDashboardComponent,
    AsideDashboardComponent,
    SidebarHomeComponent
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
    AsideDashboardComponent,
    SidebarHomeComponent
  ]
})
export class SharedModule { }
