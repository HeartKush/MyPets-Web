import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userName: string = 'tokentest';
  password: string = 'T34sTok3n';

  constructor(public http: HttpClient) { }


  loginService() {
    return this.http.post('https://mypetsplus.co/api/token-auth/', {
      userName: this.userName,
      password: this.password
    });



  }

}
