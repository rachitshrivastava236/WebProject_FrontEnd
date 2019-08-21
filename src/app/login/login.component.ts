import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

loginForm:FormGroup;

  ngOnInit() {
    this.loginForm=this.fb.group(
      {email:['',[Validators.required,Validators.email]],
      pass :['',[Validators.required]]}
    )
  }

  loginSubmit(){
    console.log("Success");
  }

}
