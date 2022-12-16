import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RoomsComponent } from './component/rooms/rooms.component';
import { AvailableRoomsComponent } from './component/rooms/available-rooms/available-rooms.component';
import { RoomAddComponent } from './component/rooms/room-add/room-add.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { GuardAdminGuard } from './guard/guard-admin.guard';
import { AboutComponent } from './component/about/about.component';
import { AdminComponent } from './component/admin/admin.component';
import { AllRoomsComponent } from './component/rooms/all-rooms/all-rooms.component';

const routes: Routes = [
  {path: "rooms", component:RoomsComponent},
  {path: "available", component:AvailableRoomsComponent},
  {path: "new", component:RoomAddComponent, canActivate:[GuardAdminGuard]},
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "admin", component:AdminComponent},
  {path: "all", component:AllRoomsComponent},
  {path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
