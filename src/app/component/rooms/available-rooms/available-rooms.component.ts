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

  constructor(private root:Router, private service:RoomsServices) { }

  list1?:Rooms[];
  list2?:Rooms[];

  ngOnInit(): void {
    if (this.service.roomType == 1) {this.service.getAllSingle().subscribe(data => this.list1 = data);this.service.getAllDeluxe().subscribe(data => this.list2 = data);}
    else if (this.service.roomType == 2) {this.service.getAllDouble().subscribe(data => this.list1 = data);this.service.getAllDeluxe().subscribe(data => this.list2 = data);}
  }

  goToReservation(room:Rooms){
    this.service.reservatedRoom = room;
    this.root.navigate(['/reservation'])
  }
}
