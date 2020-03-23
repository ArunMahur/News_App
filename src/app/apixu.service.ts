import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          'https://api.apixu.com/v1/current.json?key=f1873ab4653efd2b08ab8e64e9459e39&q=' + location
      );
  }
}