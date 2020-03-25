import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {MatDialog} from '@angular/material';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private services: ServiceService) { }
  email: string;
  password: string;
  ngOnInit() {
  }

  login() {
    if (this.services.recieveGetRequestForLogin(this.email, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/signup']);
    }
    // if (this.username == 'arun' && this.password == 'pass') {
    //   this.router.navigate(["/home"]);
    // } else {
    //   alert("Invalid credentials");
    // }
  }
}
