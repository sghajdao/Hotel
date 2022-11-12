import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rooms } from '../../model/data.model';
import { RoomsServices } from '../../services/customers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private root:Router, private service:RoomsServices) { }

  single?:Rooms[];
  double?:Rooms[];
  deluxe?:Rooms[];

  ngOnInit(): void {
    this.service.getSingleById(1).subscribe(data => this.single = data);
    this.service.getDoubleById(1).subscribe(data => this.double = data);
    this.service.getDeluxeById(1).subscribe(data => this.deluxe = data);
  }

}
