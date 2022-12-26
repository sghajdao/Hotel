import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomsServices } from '../../../services/customers.service';
import { Rooms } from '../../../model/data.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservation:FormGroup
  validators:number[] = [1, 1, 1, 1]
  pic:string
  date?:Date = new Date();
  day?:string = this.date?.toLocaleDateString();
  constructor(private service:RoomsServices, private fb:FormBuilder) {
    this.pic = this.service.reservatedRoom.pic
    if(this.service.initCustomerData){
      this.reservation = this.fb.group({
        check_in:[this.service.customerData.check_in, Validators.required],
        check_out:[this.service.customerData.check_out, Validators.required],
        adults:[this.service.customerData.adults, Validators.required],
        kids:[this.service.customerData.kids, Validators.required],
        email:['', Validators.required],
        phone:['', Validators.required]
      });
    }
    else
    {
      this.reservation = this.fb.group({
        check_in:['', Validators.required],
        check_out:['', Validators.required],
        adults:['', Validators.required],
        kids:['', Validators.required],
        email:['', Validators.required],
        phone:['', Validators.required]
      });
    }
    this.service.initCustomerData = false
  }

  ngOnInit(): void {
    this.day = this.day?.replace('/', ' ')
    this.day = this.day?.replace('/', ' ')
    this.day = this.day?.replace(/(\w+)\s(\w+)\s(\w+)/, "$3 $2 $1");
    this.day = this.day?.replace(' ', '-')
    this.day = this.day?.replace(' ', '-')
  }

}
