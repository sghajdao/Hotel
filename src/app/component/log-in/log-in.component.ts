import { Component, OnInit } from '@angular/core';
import { RoomsServices } from '../../services/customers.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private service:RoomsServices) { }

  ngOnInit(): void {
  }

}
