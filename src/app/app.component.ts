import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayDashboard: boolean = false;
  displayPublic: boolean = false;
  constructor(readonly route: Router, readonly location: Location){}
  title = 'MyPets-Web';

  ngOnInit(){
    let currentUrl = this.location.path();
    let params = currentUrl.split('/');
    if(params[1] === 'dashboard'){
      this.displayDashboard = true;
    }else{
      this.displayPublic = true;
    }
  }

}
