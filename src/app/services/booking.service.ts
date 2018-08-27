import { Injectable } from '@angular/core';
import { BookingModel } from '../models/booking-model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ShortBookingModel } from '../models/short-booking-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: BookingModel[];
  productList1: ShortBookingModel[];
  
  

  constructor(private http:HttpClient) { 
    //this.productList = products;
  }
  productUrl: string = "http://localhost:8123/api/booking"
  productUrlshort: string = "http://localhost:8123/api/shortbooking"

  getAll(){
    return this.http.get(this.productUrl);
    //return this.productList;
  }
  getbookings(id:number){
    let url = this.productUrl+"/"+id;
    return this.http.get<BookingModel>(url);
  }
  getbookingsShort(firstName:string){
    let url = this.productUrlshort+"/"+firstName;
    return this.http.get<ShortBookingModel[]>(url);
  }
  
}