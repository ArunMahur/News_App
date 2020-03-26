import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {MatDialog} from '@angular/material';
import { ServiceService } from '../../service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { browser } from 'protractor';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginform: FormGroup;

  constructor(private router: Router, private services: ServiceService) { }
  email: string;
  password: string;
  object: any;
  ngOnInit() {

    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      // tslint:disable-next-line: max-line-length
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
   });
  }

  login() {
    var response;
    this.services.recieveGetRequestForLogin(this.loginform.value.email, this.loginform.value.password)
                         .subscribe(result => {
                           response = result;
                           this.object = result;
                           console.log('>>>', this.object);
                           if (this.object === null || this.object === undefined) {
                            this.router.navigate(['/signup']);
                            window.alert('Wrong Credentials');

                          } else {
                            console.log('kalks', response);
                            this.router.navigate(['/home']);
                          }
    });


    // if (this.email == 'arun@gmail.com' && this.password == 'Pass@1234') {
    //   this.router.navigate(["/home"]);
    // } else {
    //   alert("Invalid credentials");
    // }
  }
  }

