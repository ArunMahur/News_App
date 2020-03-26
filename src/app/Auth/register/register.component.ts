import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../forms.service';
import { Router } from '@angular/router';
import { CountriesService } from '../../countries.service';
import * as $ from 'jquery';
import { ServiceService } from '../../service.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName: any;
  lastName: any;
  email: any;
  contactNo: any;
  gender: any;
  country: any;
  dob: any;
  password: any;

  countries = [];

  disabledAgreement: boolean = true;
  changeCheck(event) {
    this.disabledAgreement = !event.checked;
  }


  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  // tslint:disable-next-line: max-line-length
  constructor(public service: FormsService, private router: Router, private countryService: CountriesService, private services: ServiceService ) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(val => {
     for (let value in val){
        this.countries.push(val[value].name);
}
  } );

  }

  onClear() {
      $(':input', '.normal-form')
      .not(':button, :submit, :reset, :hidden')
      .val('')
      .removeAttr('checked')
      .removeAttr('selected');

  }
  onSubmit() {

    // tslint:disable-next-line: max-line-length
   if ( this.services.sendPostRequestForRegister(this.service.form.controls.firstName.value, this.service.form.controls.lastName.value, this.service.form.controls.email.value, this.service.form.controls.contactNo.value, this.service.form.controls.gender.value, this.service.form.controls.country.value, this.service.form.controls.dob.value, this.service.form.controls.password.value)) {
    this.services.current = this.service.form.controls.email.value;
      this.router.navigate(['/home']);
    } else {
      console.log('Error');
    }
  }
}
