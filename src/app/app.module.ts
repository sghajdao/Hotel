import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HotelFormulComponent } from './component/home/hotel-formul/hotel-formul.component';
import { HomeComponent } from './component/home/home.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { ReservationComponent } from './component/rooms/reservation/reservation.component';
import { AvailableRoomsComponent } from './component/rooms/available-rooms/available-rooms.component';
import { RoomAddComponent } from './component/rooms/room-add/room-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HotelFormulComponent,
    RoomsComponent,
    ReservationComponent,
    AvailableRoomsComponent,
    RoomAddComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
