import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../news-api.service';
import { MatTable } from '@angular/material';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: string;
  uri: string;

  mArticles: Array<any>;
  mSources: Array<any>;
  sports: Array<any>;
  india: Array<any>;

  constructor(private newsapi: NewsApiService, private services: ServiceService, private router: Router){
    console.log('app component constructor called');

  }

  ngOnInit() {
        //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
      this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
      this.newsapi.getArticlesByID('ESPN').subscribe(data => this.sports = data['articles']);
      this.newsapi.getArticlesByID('the-times-of-india').subscribe(data => this.india = data['articles'])
    }

  searchArticles(source){
    console.log('selected source is: ' + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }


  saveButton() {

    (this.services.saveUrlsForOneUser(this.email , this.uri)); {
      console.log('kr', this.email, this.uri);
      this.router.navigate(['/savedNews']);
    }


  }
}
