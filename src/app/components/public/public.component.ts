import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav-service/nav.service';


@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
    show:any = true;

  constructor(private _navService : NavService) { }

  ngOnInit(): void {
    this._navService.datosNav$.subscribe(
      (datos) => {
        console.log(datos);
        this.show = datos === 'hide' ? false : true;
        console.log(this.show);
      }
    );
  }

 

}
