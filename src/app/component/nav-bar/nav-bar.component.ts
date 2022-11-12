import { Component, Input, OnInit } from '@angular/core';
import { RoomsServices } from '../../services/customers.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  verifAdmin:any;
  constructor(private service:RoomsServices) {
    this.verifAdmin=this.service.isAdmin;
   }

  ngOnInit(): void {
  }

}
