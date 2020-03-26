import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../news-api.service';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  email: string;
  uri: string;

  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private newsapi: NewsApiService, private services: ServiceService, private router: Router) {
    console.log('app component constructor called');
  }

  ngOnInit() {
        // load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    // load news sources
      this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    }

  searchArticles(source){
    console.log('selected source is: ' + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

  saveButton() {
    console.log(document.getElementById('myAnchor'));
    var link= document.getElementById('myAnchor');
    console.log(link,'?>>>');
    var url= document.getElementById('myAnchor').getAttribute('href');
    console.log(url,'tfetf');
    this.services.saveUrlsForOneUser(this.email , url);
    window.alert('News is saved');


  }
}
