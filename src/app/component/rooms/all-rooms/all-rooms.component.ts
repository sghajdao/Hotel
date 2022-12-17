import { Component, OnInit } from '@angular/core';
import { Rooms } from '../../../model/data.model';
import { RoomsServices } from '../../../services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css']
})
export class AllRoomsComponent implements OnInit {

  constructor(private service:RoomsServices, private router:Router) { }

  single?:Rooms[];
  double?:Rooms[];
  deluxe?:Rooms[];

  ngOnInit(): void {
    this.service.getAllSingle().subscribe(data => this.single = data);
    this.service.getAllDouble().subscribe(data => this.double = data);
    this.service.getAllDeluxe().subscribe(data => this.deluxe = data);
  }

  onDelete(room:Rooms){
    if(confirm("Are you sure to delete "))
    {
      this.service.deleteRoom(room).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/'])});
    }
  }
  goToEdite(room:Rooms){
    this.service.editedRoom = room;
    this.service.editePage = true;
    this.router.navigate(['/new']);
  }
}
