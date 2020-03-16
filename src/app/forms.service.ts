import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  form: FormGroup = new FormGroup({
      $key:new FormControl(null),
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('',Validators.email),
      contactNo: new FormControl('',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      gender: new FormControl('1'),
      dob: new FormControl(''),
      country: new FormControl('0'),
      password: new FormControl('',Validators.required),
      termsCondition: new FormControl('false',Validators.requiredTrue)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      gender: '1',
      country: 0,
      dob: '',
      password:'',
      termsCondition: false
    });
  }
}
