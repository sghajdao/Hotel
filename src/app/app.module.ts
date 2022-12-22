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
import { AllRoomsComponent } from './component/rooms/all-rooms/all-rooms.component';
import { AdminComponent } from './component/admin/admin.component';
import { NavBarAdminComponent } from './component/admin/nav-bar-admin/nav-bar-admin.component';
import { LogInComponent } from './component/log-in/log-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

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
    AboutComponent,
    AllRoomsComponent,
    AdminComponent,
    NavBarAdminComponent,
    LogInComponent,
    SignUpComponent
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
