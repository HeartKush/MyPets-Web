import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav-service/nav.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  flag: boolean = true;
  searchNav: any = document.getElementById('navbarToggleExternalContent');

  constructor(private _navService: NavService) { }

  ngOnInit(): void {

    
    console.log(this._navService);

  }

  showNavMobile() {

    if (this.flag == true) {
      this.flag = false;
      this._navService.setDatosNav('hide');
    } else {
      this.flag = true;
      this._navService.setDatosNav('show');
    }

  }

}

