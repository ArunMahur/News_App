import { Component, OnInit } from '@angular/core';
import { FormsService } from '/home/kirti/Documents/news/NewsApp/NewsApp/src/app/forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  disabledAgreement: boolean = true;
  changeCheck(event) {
    this.disabledAgreement = !event.checked;
  }

  constructor(public service : FormsService, private router : Router ) { }

  countries =[
    { id: 1, value:'Afghanistan' },
    { id: 2, value:'Albania' },
    { id: 3, value:'Algeria' },
    { id: 4, value:'American Samoa' },
    { id: 5, value:'Andorra' },
    { id: 6, value: 'Angola'},


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
