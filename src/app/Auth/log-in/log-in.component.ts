import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) { }
  username: string;
  password: string;
  ngOnInit() {
  }

  login(): void {
    if (this.username == 'arun' && this.password == 'pass') {
      this.router.navigate(["/home"]);
    } else {
      alert("Invalid credentials");
    }
  }
}