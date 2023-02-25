import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Intern } from '../shared/models/intern.model';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  msg: string | undefined
  // user: Intern
  user: Intern = {
    username:"",
    password:""
  }
  signinForm: FormGroup;
  username: FormControl
  password: FormControl
  constructor(private route: Router, private loginService: LoginService, private fb: FormBuilder){
    this.username = fb.control("",[Validators.required])
    this.password = fb.control("",[Validators.required])

    this.signinForm = fb.group({
      username: this.username,
      password: this.password
    })
  }
  ngOnInit(): void {
  }


  handleSubmit(){
    console.log(this.signinForm.value);

  }
  loginUser(){
    this.loginService.loginUserFromRemote(this.user).subscribe(
      data=>{
        this.route.navigate(['/intern'])
      },
      eroor =>{
        console.log("exception received");
        this.msg = "Bad credentials please enter valid username and password"

      }
    )
  }

}
