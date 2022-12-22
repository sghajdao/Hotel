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
  validators:number[] = [1, 1, 1, 1]

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
    if(this.signUpData.value.password === this.signUpData.value.password2 && this.signUpData.value.username && this.signUpData.value.email && this.signUpData.value.password && this.signUpData.value.password2){
      let account = this.signUpData.value;
      this.service.saveAccount(account).subscribe(data=>{alert("Success saving!"); this.router.navigate(['/'])})
    }
    else{
      if (!this.signUpData.value.username){this.validators[0] = 0}
      else{this.validators[0] = 1}
      if (!this.signUpData.value.email){this.validators[1] = 0}
      else{this.validators[1] = 1}
      if (!this.signUpData.value.password){this.validators[2] = 0}
      else{this.validators[2] = 1}
      if (!this.signUpData.value.password2){this.validators[3] = 0}
      else{this.validators[3] = 1}
    }
    if(this.signUpData.value.password != this.signUpData.value.password2){this.validators[3] = 2}
  }
}
