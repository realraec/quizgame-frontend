import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Intern } from '../../shared/models/intern.model';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { InternService } from 'src/app/shared/services/intern.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginFailed: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private internService: InternService,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}
  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.loginService
      .login(this.loginForm.value['username'], this.loginForm.value['password'])
      .subscribe({
        next: (data) => this.tokenStorageService.saveToken(data.token),
        complete: () => {
          this.internService
            .getOneInternByUsername(this.loginForm.value['username'])
            .subscribe({
              next: (data) => this.tokenStorageService.saveUser(data),
              complete: () => {

                this.tokenStorageService.saveIsAuth (true);
               
                if( this.tokenStorageService.getUser().role == 'ADMIN'){
                  this.router.navigate(['/administrator'])
                }

                else{
                  this.router.navigate(['/intern'])
                }
              
              }
            });
        },
        error: () => (this.loginFailed = true),
      });
  }
}
