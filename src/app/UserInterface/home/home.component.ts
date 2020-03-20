import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../news-api.service';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;
  sports: Array<any>;
  india: Array<any>;

  constructor(private newsapi: NewsApiService){
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
    console.log('selected source is: '+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }


}
