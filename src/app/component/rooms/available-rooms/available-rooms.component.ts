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

  list1?:Rooms[];
  list2?:Rooms[];

  ngOnInit(): void {
    if (this.servic.roomType == 1) {this.servic.getAllSingle().subscribe(data => this.list1 = data);this.servic.getAllDeluxe().subscribe(data => this.list2 = data);}
    else if (this.servic.roomType == 2) {this.servic.getAllDouble().subscribe(data => this.list1 = data);this.servic.getAllDeluxe().subscribe(data => this.list2 = data);}
  }

}
