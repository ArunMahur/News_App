import { Component, OnInit } from '@angular/core';
import { FormsService } from '/home/arun/Desktop/NewsApp/src/app/forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service : FormsService, private router : Router) { }

  countries =[
    { id: 1, value:'India' },
    { id: 2, value:'Turkey' },
    { id: 3, value:'Nepal' },
    { id: 4, value:'Bangkok' },
    { id: 5, value:'Thailand' }
  ]
  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
  onSubmit() {
    this.router.navigate(["/dashboard"]);
  }
}
