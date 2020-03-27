import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-news',
  templateUrl: './saved-news.component.html',
  styleUrls: ['./saved-news.component.css']
})
export class SavedNewsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'url', 'action'];

  constructor() { }

  ngOnInit() {
  }

}
