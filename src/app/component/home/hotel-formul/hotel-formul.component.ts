import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Rooms, Customers } from '../../../model/data.model';
import { Router } from '@angular/router';
import { RoomsServices } from '../../../services/customers.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-hotel-formul',
  templateUrl: './hotel-formul.component.html',
  styleUrls: ['./hotel-formul.component.css']
})
export class HotelFormulComponent implements OnInit {

  customerData:FormGroup;

  date?:Date = new Date();
  day?:string = this.date?.toLocaleDateString();
  constructor(private router:Router, private fb:FormBuilder, private service:RoomsServices) {
    this.customerData = this.fb.group({
      check_in:['', Validators.required],
      check_out:['', Validators.required],
      adults:['1', Validators.required],
      kids:['0', Validators.required]
    })
  }
  ngOnInit(): void {
    this.day = this.day?.replace('/', ' ')
    this.day = this.day?.replace('/', ' ')
    this.day = this.day?.replace(/(\w+)\s(\w+)\s(\w+)/, "$3 $2 $1");
    this.day = this.day?.replace(' ', '-')
    this.day = this.day?.replace(' ', '-')
  }

  goToRooms(){
    if (this.customerData.value.adults == 1 && this.customerData.value.kids == 0) {this.service.roomType = 1;}
    else if (this.customerData.value.adults == 2 && this.customerData.value.kids == 0) {this.service.roomType = 2;}
    else {this.service.roomType = 3;}
    if (this.customerData.value.check_in && this.customerData.value.check_out)
    {this.router.navigate(["/available"])}
  }
}
