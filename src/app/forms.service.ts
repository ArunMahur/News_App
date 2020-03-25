import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceService } from './service.service';
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor( private services: ServiceService) { }

  form: FormGroup = new FormGroup({
      $key:new FormControl(null),
      firstName: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      contactNo: new FormControl('', [ Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      gender: new FormControl(''),
      dob: new FormControl(''),
      country: new FormControl('0'),
      // tslint:disable-next-line: max-line-length
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      // termsCondition: new FormControl('false',Validators.requiredTrue)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      email: '',
      contactNo: '',
      gender: '',
      country: 0,
      dob: '',
      password:'',
      termsCondition: false
    });
  }
}
