import { Component, OnInit } from '@angular/core';
import { RegisterService } from "../services/register.service";
import { UserModel } from '../models/user-model';
import { NgModule } from '@angular/core';
import { SelectModel } from '../models/select-model';
import { SelectService } from '../services/select.service';
import {ProductService  } from "../services/booking.service";
import { BookingModel } from '../models/booking-model';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-select-show',
  templateUrl: './select-show.component.html',
  styleUrls: ['./select-show.component.css']
})
export class SelectShowComponent implements OnInit {
  models:BookingModel;
 model:SelectModel;
 productList:Array<BookingModel>;
  constructor(public service: SelectService, public router: Router,private service1:ProductService,private route: ActivatedRoute) {
    this.model = new SelectModel("","","","","","");
   }

  ngOnInit() {
    this.models=new BookingModel(0,"","","","","","","");
    let id=parseInt(this.route.snapshot.paramMap.get("id"));
  
  console.log(`selected Id:${id}`);
  
  this.service1.getbookings(id).subscribe((response)=>
  {
    console.log(response);
    this.models=response;
  });
 // this.service.getAll();
  }
checkValid(){
  if(this.model.noOfTickets==="NULL")
  { console.log('ticketempty');
    return false;}

  else if(this.model.classs==="NULL")
  { console.log('screenempty');
    return false;}
  
  else if(this.model.screen==="NULL")
  { console.log('timingempty');
    return false;}
  else if(this.model.shows==="NULL")
  { console.log('classempty');
    return false;}
  else 
  return true;



}

submit(e){
  e.preventDefault(); 
  if(this.checkValid())
  this.service.setModal(this.model);
  this.service.create(this.model).subscribe({
    complete:()=>{
      this.router.navigate(['/payment',this.models.id]);
    }
  });
 
}
}
