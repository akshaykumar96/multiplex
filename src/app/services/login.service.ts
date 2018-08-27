import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from '../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://localhost:9955/login"

  constructor(private http: HttpClient) { }
  
  validateLogin(item:LoginModel){
    let body= JSON.stringify(item);
    let httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    }

    return this.http.post(this.url,body,httpOptions);
  }
}