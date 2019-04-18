import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from './Services/User.Services';

import {UserDetail} from './model/user-login-model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild("loginForm") loginForm: NgForm
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.userService.login(this.loginForm.value['userName'], this.loginForm.value['password'])
    .subscribe((isSuccess : boolean) => {
     this.router.navigate(["/home"]);
    });
  }

}
