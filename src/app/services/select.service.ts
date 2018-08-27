import { Injectable } from '@angular/core';
import { SelectModel } from '../models/select-model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SelectService {
model:SelectModel;

  constructor(private http: HttpClient) { }
  userUrl:string="http://localhost:8709/create"
setModal(item)
{
  this.model= item;
}

  getAll(){
    
    return this.model;
  }
  create(item:SelectModel){
    let body= JSON.stringify(item);
    let httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    }

    return this.http.post(this.userUrl,body,httpOptions);
  }
}
