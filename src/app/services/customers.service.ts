import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { observable, Observable } from "rxjs";
import { Customers, Rooms } from '../model/data.model';

@Injectable({providedIn:"root"})

export class RoomsServices{

    isAdmin=true;
    roomType:any;
    constructor(private http:HttpClient){}
    
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

}