import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NavService{

  private datosNav = new Subject<string>();
  datosNav$ = this.datosNav.asObservable();

  constructor() { }

  setDatosNav(datos: string) {
    this.datosNav.next(datos);
  }
}
