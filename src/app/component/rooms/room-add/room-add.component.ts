import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RoomsServices } from '../../../services/customers.service';
import { Rooms } from '../../../model/data.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  roomForm:FormGroup

  constructor(private fb:FormBuilder, private roomService:RoomsServices, private http:HttpClient, private router:Router) {
    this.roomForm = this.fb.group({
      pic:['', Validators.required],
      type:['', Validators.required],
      price:['', Validators.required],
      description:['', Validators.required],
      space:['', Validators.required],
      shower:[false, Validators.required],
      phone:[false, Validators.required],
      wifi:[false, Validators.required],
      tv:[false, Validators.required],
      glass:[false, Validators.required],
      cutlery:[false, Validators.required]
    })
   }

  ngOnInit(): void {
  }

  onSaveRoom(){
    let room:Rooms
    room = this.roomForm.value;
    if (this.roomForm.value.type === 'Single room'){
      this.roomService.saveSingle(room).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/'])});
    }
    else if (this.roomForm.value.type === 'Double room'){
      this.roomService.saveDouble(room).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/'])});
    }
    else if (this.roomForm.value.type === 'Deluxe room'){
      this.roomService.saveDeluxe(room).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/'])});
    }
  }

  onSelect(service:string){
    if (service === 'shower'){this.roomForm.value.shower = !this.roomForm.value.shower}
    if (service === 'phone'){this.roomForm.value.phone = !this.roomForm.value.phone}
    if (service === 'wi-fi'){this.roomForm.value.wifi = !this.roomForm.value.wifi}
    if (service === 'tv'){this.roomForm.value.tv = !this.roomForm.value.tv}
    if (service === 'glass'){this.roomForm.value.glass = !this.roomForm.value.glass}
    if (service === 'cutlery'){this.roomForm.value.cutlery = !this.roomForm.value.cutlery}
  }
}
