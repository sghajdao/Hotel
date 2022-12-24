import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { observable, Observable } from "rxjs";
import { Customers, Rooms, Account } from '../model/data.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({providedIn:"root"})

export class RoomsServices{

    isAdmin=true;
    roomType:any;
    editePage=false;
    editedRoom!:Rooms;
    reservatedRoom!:Rooms
    constructor(private http:HttpClient, private router:Router){}
    
    availableRooms(customerData:FormGroup, validator:number[]){
    if (customerData.value.adults == 1 && customerData.value.kids == 0) {this.roomType = 1;}
    else if (customerData.value.adults >= 2) {this.roomType = 2;}
    if (customerData.value.check_in && customerData.value.check_out)
    {this.router.navigate(["/available"])}
    if(!customerData.value.check_in)
    {validator[0] = 0}
    else if(customerData.value.check_in)
    {validator[0] = 1}
    if(!customerData.value.check_out)
    {validator[1] = 0}
    else if(customerData.value.check_out)
    {validator[1] = 1}
    }
    saveCustomersMemmber(data:Customers):Observable<Customers> {
        let host=environment.host;
        return this.http.post<Customers>(host + "/customers", data);
    }
    saveSingle(room:Rooms):Observable<Rooms> {
        let host=environment.host;
        return this.http.post<Rooms>(host+"/single-rooms", room);
    }
    saveDouble(room:Rooms):Observable<Rooms> {
        let host=environment.host;
        return this.http.post<Rooms>(host+"/double-rooms", room);
    }
    saveDeluxe(room:Rooms):Observable<Rooms> {
        let host=environment.host;
        return this.http.post<Rooms>(host+"/deluxe-rooms", room);
    }
    saveAccount(account:Account):Observable<Account>{
        let host=environment.host;
        return this.http.post<Account>(host+"/account", account);
    }

    getCustomerMember():Observable<Customers[]> {
        let host=environment.host;
        return this.http.get<Customers[]>(host + "/customers?id=1");
    }
    getAllSingle():Observable<Rooms[]> {
        let host=environment.host;
        return this.http.get<Rooms[]>(host + '/single-rooms');
    }
    getAllDouble():Observable<Rooms[]> {
        let host=environment.host;
        return this.http.get<Rooms[]>(host + '/double-rooms');
    }
    getAllDeluxe():Observable<Rooms[]> {
        let host=environment.host;
        return this.http.get<Rooms[]>(host + '/deluxe-rooms');
    }

    getSingleById(id:number):Observable<Rooms[]> {
        let host=environment.host;
        return this.http.get<Rooms[]>(host + '/single-rooms?id=' + id);
    }
    getDoubleById(id:number):Observable<Rooms[]> {
        let host=environment.host;
        return this.http.get<Rooms[]>(host + '/double-rooms?id=' + id);
    }
    getDeluxeById(id:number):Observable<Rooms[]> {
        let host=environment.host;
        return this.http.get<Rooms[]>(host + '/deluxe-rooms?id=' + id);
    }
    deleteRoom(room:Rooms):Observable<void> {
        let host=environment.host;
        if (room.type === "Single room"){return this.http.delete<void>(host + '/single-rooms/'+room.id);}
        else if(room.type === "Double room"){return this.http.delete<void>(host + '/double-rooms/'+room.id);}
        else{return this.http.delete<void>(host + '/deluxe-rooms/'+room.id);}
    }
    updateRoom(room:Rooms):Observable<Rooms> {
        let host=environment.host;
        if(room.type === "Single room"){return this.http.put<Rooms>(host + '/single-rooms/'+room.id, room);}
        else if(room.type === "Double room"){return this.http.put<Rooms>(host + '/double-rooms/'+room.id, room);}
        else{return this.http.put<Rooms>(host + '/deluxe-rooms/'+room.id, room);}
    }
}