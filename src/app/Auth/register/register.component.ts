import { Component, OnInit } from '@angular/core';
import { FormsService } from '../../forms.service';
import { Router } from '@angular/router';
import { CountriesService } from '../../countries.service';
import * as $ from 'jquery';

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

  countries = [];
  getToday(): string {
    return new Date().toISOString().split('T')[0]
 }

  constructor(public service : FormsService, private router : Router, private country: CountriesService ) { }

  ngOnInit() {
    this.country.getCountries().subscribe(val => {
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
    this.router.navigate(['/dashboard']);
  }


}
