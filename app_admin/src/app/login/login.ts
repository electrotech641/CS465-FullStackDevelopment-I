import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ){}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = '';
    if(!this.credentials.email || !this.credentials.password || !this.credentials.name) {
      this.formError = 'All fields are required, please try again';
      //this.router.navigateByUrl('#'); //Return to login page
    } else {
      this.doLogin();
    }
  }

  public onRegisterSubmit(): void {
    this.formError = '';
    if(!this.credentials.email || !this.credentials.password || !this.credentials.name) {
      this.formError = 'All fields are required, please try again';
      //this.router.navigateByUrl('#'); //Return to login page
    } else {
      this.doRegister();
    }
  }

  private doLogin(): void {
  const newUser = {
    name: this.credentials.name,
    email: this.credentials.email
  } as User;

  this.authenticationService.login(newUser, this.credentials.password)
    .then(() => {
      console.log('Router::Direct');
      this.router.navigate(['']);
    })
    .catch(() => {
      this.formError = 'Login failed. Please try again.';
    });
  }


  private doRegister(): void {
  const newUser = {
    name: this.credentials.name,
    email: this.credentials.email
  } as User;

  this.authenticationService.register(newUser, this.credentials.password)
  .then(() => {
    return this.authenticationService.login(newUser, this.credentials.password);
  })
  .then(() => {
    console.log('Router::Direct');
    this.router.navigate(['']);
  })
  .catch(() => {
    this.formError = 'Registration failed. Please try again.';
  });

  
  }
}
