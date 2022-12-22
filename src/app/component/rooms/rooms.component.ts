import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rooms } from '../../model/data.model';
import { RoomsServices } from '../../services/customers.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  date?:Date = new Date();
  day?:string = this.date?.toLocaleDateString();
  customerData:FormGroup;
  validator:number[] = [1, 1];
  constructor(private root:Router, private service:RoomsServices, private fb:FormBuilder) {
    this.customerData = this.fb.group({
      check_in:['', Validators.required],
      check_out:['', Validators.required],
      adults:['1', Validators.required],
      kids:['0', Validators.required]})
   }

  single?:Rooms[];
  double?:Rooms[];
  deluxe?:Rooms[];

  ngOnInit(): void {
    this.day = this.day?.replace('/', ' ')
    this.day = this.day?.replace('/', ' ')
    this.day = this.day?.replace(/(\w+)\s(\w+)\s(\w+)/, "$3 $2 $1");
    this.day = this.day?.replace(' ', '-')
    this.day = this.day?.replace(' ', '-')

    this.service.getSingleById(1).subscribe(data => this.single = data);
    this.service.getDoubleById(1).subscribe(data => this.double = data);
    this.service.getDeluxeById(2).subscribe(data => this.deluxe = data);
  }

  goToRooms(){
    this.service.availableRooms(this.customerData, this.validator);
  }
}
