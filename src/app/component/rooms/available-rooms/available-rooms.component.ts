import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsServices } from '../../../services/customers.service';
import { Rooms, Customers } from '../../../model/data.model';

@Component({
  selector: 'app-available-rooms',
  templateUrl: './available-rooms.component.html',
  styleUrls: ['./available-rooms.component.css']
})
export class AvailableRoomsComponent implements OnInit {

  constructor(private root:Router, private servic:RoomsServices) { }

  list?:Rooms[];

  ngOnInit(): void {
    if (this.servic.roomType == 1) {this.servic.getAllSingle().subscribe(data => this.list = data);}
    else if (this.servic.roomType == 2) {this.servic.getAllDouble().subscribe(data => this.list = data);}
    else if (this.servic.roomType == 3) {this.servic.getAllDeluxe().subscribe(data => this.list = data);}
  }

}
