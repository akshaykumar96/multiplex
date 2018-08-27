import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lmodel:LoginModel;
  loginSuccess :boolean; 
  constructor(public service: LoginService, public router: Router) { }

  ngOnInit() {
    this.lmodel=new LoginModel("","");
  }
  messageClass:string = "hidden"; 
  submit(e){
    e.preventDefault();
    
    this.service.validateLogin(this.lmodel).subscribe((response)=> {
      if(response){
        this.loginSuccess=true;
        //this.loginMessage=" success.";
        this.router.navigate(["/home"]);
      } else {
        this.messageClass="show alert alert-danger";
        this.loginSuccess=false;
      }
      console.log("loginnn");
    });
  }




}
