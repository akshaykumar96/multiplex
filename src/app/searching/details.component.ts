import { Component, OnInit, Input } from '@angular/core';
import { BookingModel } from '../models/booking-model';
import {ProductService  } from "../services/booking.service";
import { ShortBookingModel } from '../models/short-booking-model';
import { Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  model:BookingModel;
  productList:Array<BookingModel>;


  
  constructor(private service:ProductService, private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.model=new BookingModel(0,"","","","","","","");
    let id=parseInt(this.route.snapshot.paramMap.get("id"));
  
  console.log(`selected Id:${id}`);
  
  this.service.getbookings(id).subscribe((response)=>
  {
    console.log(response);
    this.model=response;
  });
  

  }

}

