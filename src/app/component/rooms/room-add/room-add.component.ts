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
  validators:number[] = [1, 1, 1, 1, 1]
  editePage = this.roomService.editePage;

  constructor(private fb:FormBuilder, private roomService:RoomsServices, private http:HttpClient, private router:Router) {
    if (this.roomService.editePage){
      this.roomForm = this.fb.group({
        id:[this.roomService.editedRoom?.id],
        pic:[this.roomService.editedRoom?.pic, Validators.required],
        type:['', Validators.required],
        price:[this.roomService.editedRoom?.price, Validators.required],
        description:[this.roomService.editedRoom?.description, Validators.required],
        space:[this.roomService.editedRoom?.space, Validators.required],
        shower:[this.roomService.editedRoom?.shower, Validators.required],
        phone:[this.roomService.editedRoom?.phone, Validators.required],
        wifi:[this.roomService.editedRoom?.wifi, Validators.required],
        tv:[this.roomService.editedRoom?.tv, Validators.required],
        glass:[this.roomService.editedRoom?.glass, Validators.required],
        cutlery:[this.roomService.editedRoom?.cutlery, Validators.required]
      })
    }
    else
    {this.roomForm = this.fb.group({
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
    })}
   }

  ngOnInit(): void {
  }

  onSaveRoom(){
    let room:Rooms
    room = this.roomForm.value;
    if (this.roomForm.value.pic && this.roomForm.value.type && this.roomForm.value.price && this.roomForm.value.description && this.roomForm.value.space){
      if (this.roomForm.value.type === 'Single room'){
        this.roomService.saveSingle(room).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/'])});
      }
      else if (this.roomForm.value.type === 'Double room'){
        this.roomService.saveDouble(room).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/'])});
      }
      else if (this.roomForm.value.type === 'Deluxe room'){
        this.roomService.saveDeluxe(room).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/'])});
      }
      this.router.navigate(['/admin']);
    }
    else{
      if(!this.roomForm.value.pic){this.validators[0] = 0}
      else{this.validators[0] = 1}
      if(!this.roomForm.value.type){this.validators[1] = 0}
      else{this.validators[1] = 1}
      if(!this.roomForm.value.price){this.validators[2] = 0}
      else{this.validators[2] = 1}
      if(!this.roomForm.value.description){this.validators[3] = 0}
      else{this.validators[3] = 1}
      if(!this.roomForm.value.space){this.validators[4] = 0}
      else{this.validators[4] = 1}
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

  onEdite(){
    this.roomService.editedRoom = this.roomForm.value
    this.roomService.updateRoom(this.roomService.editedRoom).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/all'])});
  }

  onCancel(){this.router.navigate(['/admin'])}

  ngOnDestroy(): void {
    this.roomService.editePage = false;
    this.editePage = this.roomService.editePage;
  }
}
