import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RoomsServices } from '../../services/customers.service';
import { Router } from '@angular/router';
import { Account } from '../../model/data.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpData:FormGroup
  constructor(private fb:FormBuilder, private service:RoomsServices, private router:Router) {
    this.signUpData = this.fb.group({
      username:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      password2:['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  sign_up(){
    if(this.signUpData.value.password === this.signUpData.value.password2){
      let account = this.signUpData.value;
      this.service.saveAccount(account).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/'])})
    }
  }
}
