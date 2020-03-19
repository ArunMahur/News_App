import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(public http: HttpClient) { }



  getCountries(): Observable<Object> {
    const url = 'https://restcountries.eu/rest/v2/all';
    return this.http.get(url)
      .pipe(map((res) => {
        //console.log(JSON.stringify(res));
        return res;
      }));
  }
}
