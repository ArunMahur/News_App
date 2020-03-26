import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'http://localhost:4000/items';
  url2 = 'http://localhost:4000/item';
  urls = 'http://localhost:4000/urls';

  constructor( private http: HttpClient ) {}

  // tslint:disable-next-line: max-line-length
  sendPostRequestForRegister(firstName: any, lastName: any, email: any, contactNo: any, gender: any, country: any, dob: any, password: any) {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json');

    const body = {
      firstName: `${firstName}`,
      lastName: `${lastName}`,
      email: `${email}`,
      contactNo: `${contactNo}`,
      gender: `${gender}`,
      dob: `${dob}`,
      country: `${country}`,
      password: `${password}`,
  };
    return this.http
    .post(this.url, body, { headers })
    .subscribe(res => res);
  }

  // tslint:disable-next-line: max-line-length
  recieveGetRequestForLogin(email: any, password: any) {      //use condition that if this returns a data then its good but if null then false login
    const headers = new HttpHeaders()
    .set('content-type', 'application/json');
console.log('kk',email, '>>>?',password);
    return this.http
    .get(this.url + `/${email}/${password}`, { headers })
    .pipe(map(res => res));
    // .subscribe(res => res);
  }

  recieveUrlsForOneUser( email: any) {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json');

    return this.http
    .get(this.url2 + `/${email}`, { headers })
    // .subscribe(res => res);
    .pipe(map(res => res ));
  }

  saveUrlsForOneUser( email: any, uri: any) {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json');

    return this.http
    .post(this.urls + `/${email}/${uri}`, { headers })
    .subscribe(res => res);
  }

}
